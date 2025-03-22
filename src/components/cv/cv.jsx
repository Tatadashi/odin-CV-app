import "../../styles/cv/cv.css";
import PersonalSection from "./personalSection.jsx";
import EducationSection from "./educationSection.jsx";
import ExperienceSection from "./experienceSection.jsx";

function Cv({ personalInfo, educationList, experienceList }) {
  return (
    <>
      <div className="cv">
        <PersonalSection info={personalInfo} />
        <EducationSection educationList={educationList} />
        <ExperienceSection experienceList={experienceList} />
      </div>
    </>
  );
}

export default Cv;
