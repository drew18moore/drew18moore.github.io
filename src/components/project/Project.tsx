import "./project.css";

type ProjectProps = {
  img: string;
  name: string;
  description: string;
  technologies: string[];
  repoURL: string;
  siteURL: string;
};

const Project = ({
  img,
  name,
  description,
  technologies,
  repoURL,
  siteURL,
}: ProjectProps) => {
  return (
    <div className="project-item">
      <div className="img-container">
        <img className="project-img" src={`projects/${img}`} alt={name} />
      </div>
      <div className="details-container">
        <h2>{name}</h2>
        <p className="project-description">{description}</p>
          <div className="technology-imgs">
            {technologies.map((technology, index) => {
              return (
                <img
                  src={`logos/${technology}`}
                  alt="technology logo"
                  key={index}
                />
              );
            })}
          </div>
        <div className="project-links">
          {repoURL !== "" && (
            <a href={repoURL} target={"_blank"}>
              View Repo
            </a>
          )}
          {siteURL !== "" && (
            <a href={siteURL} target={"_blank"}>
              Visit Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
