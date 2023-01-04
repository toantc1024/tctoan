import React from 'react';
import Project from './Project/Project';
import { project_data } from './project-info';
import './Projects.css';

const Projects = () => {
	return (
		<div className="projects" >
			<a className="projects-title f6 grow no-underline ph3 pv2 mb2 dib">Toan's project(s)</a>
			<div className="projects-wrapper">
				{
					project_data.map ((data, key) => {
						return (
							<Project key={key} data={data}/>
						)
					})
				}
			</div>
		</div>
	)
}

export default Projects;