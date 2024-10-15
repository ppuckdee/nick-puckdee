import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Patcharapol Puckdee"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Patcharapol <br />
          Puckdee
        </h1>
        <h2>UX/UI Frontend Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/nicholas-puckdee-068b692a2" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/ppuckdee" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        
      </div>
    </section>
  );
}

export default Hero;
