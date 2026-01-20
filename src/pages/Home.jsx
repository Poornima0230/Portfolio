import "../styles/home.css";
import { About } from "./About";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-content">
          <div className="blur">
            <img src="girl.jpg" alt="my-image" className="my-image" />
            <h1 className="my-name">Poornima Perisetty</h1>
            <h3 className="my-tag">A passionate Frontend-developer</h3>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};
