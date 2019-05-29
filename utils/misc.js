module.exports = {
	numberReducer: function (accumulator, currentValue) {
		return Number(accumulator) + Number(currentValue);
	},
	removeFalsey: function (arr) {
		return arr.filter(item => item);
	},
	removeSpecialChars: function(arr) {
		let specialChars = ".\/|=+-)(*&^%₦#@!~`<>?:;\"'}{";
		return arr.filter(item => !specialChars.includes(item));
	},
	chunkArray: function (arr, size) {
		let container = [];
		for (let i = 0; i < arr.length; i += size) {
			let temp = arr.slice(i, i+size);
		   	container.push(temp);
		}
		return container;
	},
	delay: function(ms) {
		return new Promise( resolve => setTimeout(resolve, ms));
	}
}
