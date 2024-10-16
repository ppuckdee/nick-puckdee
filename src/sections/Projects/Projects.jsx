import styles from "./ProjectsStyles.module.css";
import harmony from "../../assets/harmony.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://www.canva.com/design/DAGHEdKpBZg/xYmwsiJcK4ZvwhLLryp3mw/edit?utm_content=DAGHEdKpBZg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">
        <img className="hover" src={harmony} alt="Harmony Logo" />
        <h3>Harmony</h3>
        <p>Work-life balance app design</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
