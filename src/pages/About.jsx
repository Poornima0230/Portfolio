import "../styles/about.css";
export const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-blur">
          <div className="about-content">
            <div className="common-heading">
              <h1 className="common-title">About Me</h1>
              <hr className="common-underline" />
            </div>
            <div className="about-pic">
              <img
                src={`${import.meta.env.BASE_URL}girl.jpg`}
                alt="My-image"
                className="about-img"
              />
            </div>
            <div className="about-matter">
              <p>
                Hi,I’m <b>Poornima</b>!
              </p>
              <p>
                A 1st-year CSE student passionate about building clean and
                useful webApps with React.
              </p>
              <p>
                {" "}
                Currently strengthening my frontend fundamentals while exploring
                full-stack development.
              </p>

              <p className="style">
                Always learning - one small experiments at a time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
