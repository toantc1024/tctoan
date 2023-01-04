import React from 'react';
import Logo from '../Logo/Logo';
import tachyons from 'tachyons';
import "./Navigation.css";
const Navigation = ({executeScroll}) => {
	return (
		<nav id="navbar">
			<Logo />
			<div className="menu">
				<a href="https://github.com/toantc1024" target="_blank" className="f6 grow no-underline ph3 pv2 mb2 dib white bg-black">
				<span className="github-link">
					<span>Github</span>
				</span>
				</a>	
				<a onClick={() => executeScroll(document.getElementById('info-container').getBoundingClientRect().height-document.getElementById('navbar').getBoundingClientRect().height+1, .5)} className="f6 grow no-underline ph3 pv2 mb2 dib">Projects</a>
			</div>
		</nav>
	)	
}

export default Navigation;