import "../../styles/cv/experienceSection.css";
import Experience from "./experience";

export default function ExperienceSection({ experienceList }) {
  return (
    <>
      <h3 className="experienceSectionTitle">Experience</h3>
      <section className="experienceSection">
        <ul className="experienceList">
          {experienceList.map((experience, index) => (
            <li key={index} className="experience">
              <Experience info={experience} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
