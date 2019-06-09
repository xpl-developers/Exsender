export function Input(props) {
		let options = [];
		if(props.options && props.list) {
			for( let option of props.options) {
				options.push(<option value={option.value} key={option.value} />);
			}

		}

		return (
			<div className="field">
				<div className="control">
					<input 
						className={"input " + props.className} 
						type={props.type} 
						placeholder={props.placeholder || null} 
						name={props.name || null}
						onBlur={props.onBlur || null}
						onFocus={props.onFocus || null}
						onChange={props.onChange || null}
						list={props.list || null} 
						id={props.id || null} 
						value={props.value}
						disabled={props.disabled || null} 
						readOnly={props.readOnly || null} 
						autoComplete={props.autoComplete || "off"}
					/>
					{
						options.length > 0 && 
						<datalist id={props.list}>{options}</datalist>
					}
				</div>
			</div>
		);
}

export function Select(props) {
		let options = [];

		if(props.options.length) {
			options.push(<option key="-1" value="" disabled> Select an option </option>);

			for( let option of props.options) {
				options.push(<option value={option.value} key={option.value}> {option.name || option.value} </option>);
			}

			return (
				<div className={"select "+props.className}>
					<select 
						name={props.name || null} 
						id={props.id || null}
						value={props.value || ""}
						onChange={props.onChange || null}
					>
						{options}
					
					</select>
				</div>
			);
		}
		return null
}

export function TextArea(props) {
	return (
		<div className="field">
			<div className="control">
				<textarea
					className={"textarea "+ props.className}
					placeholder={props.placeholder || null}
					onChange={props.onChange || null}
					onBlur={props.onBlur || null}
					name={props.name || null}
					id={props.id || null}
					value={props.value || ""}
				></textarea>
			</div>
		</div>
	)
}

export function CheckBox(props) {
	return (
			<label className={props.type}>
				<input 
					type={props.type}
					name={props.name || null}
					defaultChecked={props.defaultChecked || null}
					id={props.id || null}
					disabled={props.disabled || null}
					onChange={props.onChange || null}
					onClick={props.onClick || null}
				/>
				 &nbsp; {props.placeholder || null}
			</label>
		)
}

export function Button(props) {
	return (
		<button
			type={props.type}
			className={props.className || null}
			title={props.title}
			disabled={props.disabled || null}
			onClick={props.onClick || null}
		>
			{props.text}
		</button>
	)
}

export function FileInput(props) {
  return (
  	<div className="field">
	  	<div className="control">
		    <div className="file is-link has-name">
		      <label className="file-label">
		        <input className="file-input" type="file" name={props.name} id={props.id || props.name} onChange={props.onChange} />
		        <span className="file-cta">
		          <span className="file-icon">
		            <i className="fas fa-upload"></i>
		          </span>
		          <span className="file-label">
		            {props.label}
		          </span>
		        </span>
		        <span className="file-name" title={props.fileName}>
		          {props.fileName}
		        </span>
		      </label>
		    </div>
	    </div>
    </div>
  )
}


export function MultipleCheckBoxes(props) {
	return(
		<div className="field">
			<div className="control">
				{
					props.inputArray.map(
							(box, i) => <CheckBox {...box} key={i}/>
						)
				}
			</div>
		</div>
	)
}