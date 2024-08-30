import styles from './ProjectsStyles.module.css';
import freshBurger from '../../assets/HMS.jpg';
import hipsster from '../../assets/Smart_recommend.jpg';
import fitLift from '../../assets/Online.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="https://blog.zegocloud.com/wp-content/uploads/2023/02/coding-platform.jpg"
          link="https://github.com/Abhilashcyber/binary-brawlers-hack"
          h3="Online Coding platform"
         
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Arjun28-L/Hotel-Vehicle_Booking_System"
          h3="Online Hotel & Vechile Renting"
          
        />
      </div>
    </section>
  );
}

export default Projects;
