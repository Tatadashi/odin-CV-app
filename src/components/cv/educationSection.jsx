import "../../styles/cv/nonTopSection.css";
import Education from "./education";

export default function EducationSection() {
  return (
    <>
      <h3 className="sectionTitle">Education</h3>
      <section className="nonTopSection">
        <Education
          form={{
            educationFacility: "Some School/Uni",
            educationMajorAndGPA: "Master of Yap in Yapology; GPA 10.0",
            educationLocation: "YapTown, YA",
            educationTime: "Mar. 2000 - Mar. 2000",
          }}
        />
        <Education
          form={{
            educationFacility: "Some School/Uni",
            educationMajorAndGPA: "Master of Yap in Yapology; GPA 10.0",
            educationLocation: "YapTown, YA",
            educationTime: "Mar. 2000 - Mar. 2000",
          }}
        />
      </section>
    </>
  );
}
