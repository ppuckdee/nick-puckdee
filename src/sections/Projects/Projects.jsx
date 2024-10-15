import styles from "./ProjectsStyles.module.css";
import darkthrone from "../../assets/darkthrone.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/esaltzherr/Dark-Throne">
        <img className="hover" src={darkthrone} alt="Dark Throne Logo" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
