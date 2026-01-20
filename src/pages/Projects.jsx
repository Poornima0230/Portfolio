import "../styles/projects.css";
import projects from "../data/project.json";
import { NavLink } from "react-router";
export const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="projects-overlay">
          <div className="common-heading">
            <h1 className="common-title">My Works</h1>
            <hr className="common-underline" />
          </div>
          <div className="left-hang"></div>
          <ul className="projects-div">
            {projects.map((curr) => {
              return (
                <li key={curr.id} className="each-project">
                  <img src={curr.img} className="project-img" alt={curr.name} />
                  <h3>{curr.name}</h3>
                  <p>{curr.description}</p>
                  <div className="button-div">
                    <NavLink to={curr.live}>
                      <div className="live">Live Demo</div>
                    </NavLink>
                    <NavLink to={curr.github}>
                      <div className="live">Github</div>
                    </NavLink>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="right-hang"></div>
        </div>
      </div>
    </>
  );
};
