import techSkill from "../data/techinicalSkills.json";
import tools from "../data/tools.json";
import "../styles/skills.css";

export const Skills = () => {
  return (
    <div className="skills">
      <div className="common-heading">
        <h1 className="common-title">Skills</h1>
        <hr className="common-underline" />
      </div>
      <div className="technical">
        <div className="tech-head">
          <h3>Technical Skills</h3>
          <hr className="common-underline" />
        </div>
        <ul className="tech">
          {techSkill.map((cur) => {
            return (
              <li className="each-tech" key={cur.id}>
                <img src={cur.icon} alt={cur.name} className="each-img" />
                <p className="each-name">{cur.name}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="technical">
        <div className="tech-head">
          <h3>Tools</h3>
          <hr className="common-underline" />
        </div>
        <ul className="tech">
          {tools.map((cur) => {
            return (
              <li className="each-tech" key={cur.id}>
                <img src={cur.icon} alt={cur.name} className="each-img" />
                <p className="each-name">{cur.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
