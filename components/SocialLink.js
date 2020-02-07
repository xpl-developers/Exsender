import appConfig from '../app.config';


export default (props) => {
	let channels = [];
	let socials = appConfig.social;
	for (let link in socials) {

		let temp = <a 
					href={socials[link]} 
					target="_blank"
					className={props.classList || "has-text-grey mr-2"} 
					key={link}> 

					<i 
						className={`fab fa-${link} fa-${props.size || "2"}x`}>
					</i> 
				</a>;
		
		channels.push(temp);
	}

	return channels;
}