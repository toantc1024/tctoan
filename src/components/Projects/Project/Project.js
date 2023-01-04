import React from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
const Project = ({data}) => {
	const {link, info, imageUrl, title} = data;
	return (
		<div className="project">
			<a className="f6 dim no-underline ph3 pv2 mb2 dib" target="_blank" href={link}>
				<span className="links">
					<span>
						{title}
					</span>
					<span>
						<LaunchIcon />
					</span>
				</span>
			</a>
			<div>{info}</div>
			<div className="image">
				<img src={imageUrl} alt={title}/>
			</div>
		</div>
	)
}

export default Project;