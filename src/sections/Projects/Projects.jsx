import styles from "./ProjectsStyles.module.css";
import harmony from "../../assets/harmony.png";
import harmonyslide from "../../assets/harmony.pdf";
import darkthrone from "../../assets/darkthrone.png"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={harmony}
          link={harmonyslide}
          h3="Harmony"
          p="Work-life balance app design"
        />
        <ProjectCard
          src={darkthrone}
          link="https://github.com/esaltzherr/Dark-Throne"
          h3="Dark Throne"
          p="2D Game Project"
        />
      </div>
    </section>
  );
}

export default Projects;
