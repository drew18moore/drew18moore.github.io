import "./home.css";

function Home() {
  return (
    <main id="home-main">
      <div id="profile-card">
        <img src="profile-picture.png" alt="Profile Picture" />
        <div id="profile-text">
          <h1>Hello There!</h1>
          <h2>
            I am a front-end developer with a degree in Computer Science
          </h2>
        </div>
      </div>
      <div id="skills-card">
        <h1>Skills</h1>
        <ul id="skills-list">
          <li>
            <img
              className="skill-img"
              src="logos/js-logo.png"
              alt="js-logo"
            />
            <p>Javascript</p>
          </li>
          <li>
            <img
              className="skill-img"
              src="logos/html-logo.png"
              alt="js-logo"
            />
            <p>HTML</p>
          </li>
          <li>
            <img
              className="skill-img"
              src="logos/css-logo.png"
              alt="js-logo"
            />
            <p>CSS</p>
          </li>
          <li>
            <img
              className="skill-img"
              src="logos/react-logo.png"
              alt="reactjs-logo"
            />
            <p>React</p>
          </li>
          <li>
            <img
              className="skill-img"
              src="logos/py-logo.png"
              alt="js-logo"
            />
            <p>Python</p>
          </li>
          <li>
            <img
              className="skill-img"
              src="logos/java-logo.png"
              alt="js-logo"
            />
            <p>Java</p>
          </li>
          <li>
            <img
              className="skill-img"
              src="logos/cs-logo.png"
              alt="js-logo"
            />
            <p>C#</p>
          </li>
          <li>
            <img
              className="skill-img"
              src="logos/flask-logo.png"
              alt="js-logo"
            />
            <p>Flask</p>
          </li>
          <li>
            <img
              className="skill-img"
              src="logos/sqlalchemy-logo.png"
              alt="js-logo"
            />
            <p>SQLAlchemy</p>
          </li>
          <li>
            <img
              className="skill-img"
              src="logos/unity-logo.png"
              alt="js-logo"
            />
            <p>Unity</p>
          </li>
          <li>
            <img
              className="skill-img"
              src="logos/jquery-logo.png"
              alt="js-logo"
            />
            <p>JQuery</p>
          </li>
          <li>
            <img
              className="skill-img"
              src="logos/git-logo.png"
              alt="js-logo"
            />
            <p>Git</p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Home;
