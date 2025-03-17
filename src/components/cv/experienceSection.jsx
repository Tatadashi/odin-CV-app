import "../../styles/cv/nonTopSection.css";
import Experience from "./experience";

export default function ExperienceSection() {
  return (
    <>
      <h3 className="sectionTitle">Experience</h3>
      <section className="nonTopSection">
        <Experience
          form={{
            experienceFacility: "Some WorkPlace",
            experienceTitle: "Yap God",
            experienceLocation: "YapTown, YA",
            experienceTime: "Mar. 2000 - Mar. 2000",
          }}
        />
      </section>
    </>
  );
}
