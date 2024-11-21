import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import ProjectCard from "../../ProjectCard";
const Project = ({ data }) => {
  const { github, demo, info, title } = data;
  return (
    <div className="project">
      <h1>{title}</h1>
      <div style={{ display: "flex" }}>
        <a
          className="f6 dim no-underline ph3 pv2 mb2 dib"
          target="_blank"
          href={github}
        >
          <span className="links">
            <span>Github repo</span>
            <span>
              <LaunchIcon />
            </span>
          </span>
        </a>
        <a
          className="f6 dim no-underline ph3 pv2 mb2 dib"
          target="_blank"
          href={demo}
        >
          <span className="links">
            <span>Deployed site</span>
            <span>
              <LaunchIcon />
            </span>
          </span>
        </a>
      </div>
      <div>{info}</div>
      <div className="image">{/* <img src={imageUrl} alt={title} /> */}</div>
    </div>
  );
};

export default Project;
