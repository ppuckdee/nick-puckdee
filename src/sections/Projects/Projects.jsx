import styles from "./ProjectsStyles.module.css";
import harmony from "../../assets/harmony.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={harmony}
          link="https://www.canva.com/design/DAGHEdKpBZg/xYmwsiJcK4ZvwhLLryp3mw/edit?utm_content=DAGHEdKpBZg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          h3="Harmony"
          p="Work-life balance app design"
        />
        <ProjectCard
          src={harmony}
          link="https://www.canva.com/design/DAGHEdKpBZg/xYmwsiJcK4ZvwhLLryp3mw/edit?utm_content=DAGHEdKpBZg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          h3="Harmony"
          p="Work-life balance app design"
        />
        <ProjectCard
          src={harmony}
          link="https://www.canva.com/design/DAGHEdKpBZg/xYmwsiJcK4ZvwhLLryp3mw/edit?utm_content=DAGHEdKpBZg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          h3="Harmony"
          p="Work-life balance app design"
        />
      </div>
    </section>
  );
}

export default Projects;
