import "../../styles/inputForm/inputForm.css";
import PersonalForm from "./personalForm.jsx";
import EducationForm from "./educationForm.jsx";
import ExperienceForm from "./experienceForm.jsx";

export default function InputForm({
  personalInfo,
  setPersonalInfo,
  educationList,
  setEducationList,
  experienceList,
  setExperienceList,
}) {
  return (
    <div className="inputForm">
      <PersonalForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <ul className="educationListForm">
        {/**not using education but need it since 2nd parameter is index */}
        {educationList.map((education, index) => (
          <li key={index} className="educationForm">
            <EducationForm
              index={index}
              educationList={educationList}
              setEducationList={setEducationList}
            />
          </li>
        ))}
      </ul>
      <ul className="experienceListForm">
        {/**not using experience but need it since 2nd parameter is index */}
        {experienceList.map((experience, index) => (
          <li key={index} className="experienceForm">
            <ExperienceForm
              index={index}
              experienceList={experienceList}
              setExperienceList={setExperienceList}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
