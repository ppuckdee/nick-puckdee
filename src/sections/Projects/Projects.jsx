import styles from "./ProjectsStyles.module.css";
import harmony from "../../assets/harmony.png";
import harmonyslide from "../../assets/harmony.pdf";
import darkthrone from "../../assets/darkthrone.png";
import artify from "../../assets/artify.png";
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
         <ProjectCard
          src={artify}
          link="https://github.com/ppuckdee/Artify"
          h3="Artify"
          p="Drawing app for children"
        />
      </div>
    </section>
  );
}

export default Projects;
