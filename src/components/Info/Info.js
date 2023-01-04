import React from 'react';
import './Info.css';

const Info = () => {
	return (
		<div className="info-container" id="info-container">
			<div className="emoji grow dib pointer" >
				<div>
				<span className="oword" style={{color: "white"}}>o</span>
				<span>^^</span>
				<span className="starword" style={{color: "white"}}>*</span>
				</div>	
			</div>
			<div >
				Hi! I'm Toan.
			</div>
			<div className="status pointer grow dib">
				Full stack developer you need!
			</div>
		</div>
	)
}

export default Info;