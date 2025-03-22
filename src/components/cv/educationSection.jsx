import "../../styles/cv/educationSection.css";
import Education from "./education";

export default function EducationSection({ educationList }) {
  return (
    <>
      <h3 className="educationSectionTitle">Education</h3>
      <section className="educationSection">
        <ul className="educationList">
          {educationList.map((education, index) => (
            <li key={index} className="education">
              <Education info={education} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
