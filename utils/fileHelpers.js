import XLSX from 'xlsx';


export class SpreadsheetHelper {
	static validateFileType(type) {
		let types = [
			"application/vnd.oasis.opendocument.spreadsheet",
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			"application/json"
		];
		return types.includes(type);
	}

	static readFile(file) {
		
		return new Promise((resolve, reject) => {
			if ( !SpreadsheetHelper.validateFileType(file.type) ) {
				return reject("Invalid file type");
			} 
			let reader = new FileReader();
				reader.onload = function(e) {

					let result = e.target.result, json;

					if ( file.type === "application/json" ) {
						
						return resolve(result);
					
					} else { 

						let sheet = XLSX.read(result, {type: "binary"});

						let	sheetName = sheet.SheetNames[0] || sheet.Workbook.Sheets[0].name;
						
						let	sheetToJson = XLSX.utils.sheet_to_json(sheet.Sheets[sheetName]);
						return resolve(sheetToJson);
					}
				}

				reader.onerror = function(e) {
					reader.abort()
					return reject("Error reading file");
				}
			reader.readAsBinaryString(file);
		})
	}

	static readObjectProperty(arrayOfObject) {
		// columns -> ["address", ?"amount"]
		let addresses = [], amounts = [];

		for ( let i = 0; i < arrayOfObject.length; i++ ) {
			
			let temp = arrayOfObject[i];
			let addr = temp["Address"] || temp["address"] || temp["Addresses"] || temp["addresses"];
			let amt = temp["Amount"] || temp["amount"] || temp["Amounts"] || temp["amounts"];
			
			if ( addr ) addresses.push(addr);

			if ( amt ) amounts.push(temp["amount"]);
		}
		if ( amounts.length > 0 ) return Promise.resolve({addresses, amounts});
		
		return Promise.resolve({addresses});
	}
}