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
            responsibilitiesList: [
              {
                name: 'Yapping',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
               },
            ]
          }}
        />
      </section>
    </>
  );
}
