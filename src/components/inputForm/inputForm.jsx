import "../../styles/inputForm/inputForm.css";
import Collapsible from "./collapsible.jsx";
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
      <Collapsible name="Personal Info Form">
        <PersonalForm
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      </Collapsible>
      <ul className="educationListForm">
        {/**not using education but need it since 2nd parameter is index */}
        {educationList.map((education, index) => (
          <Collapsible name="Education Info Form" index={index + 1}>
            <li key={index} className="educationForm">
              <EducationForm
                index={index}
                educationList={educationList}
                setEducationList={setEducationList}
              />
            </li>
          </Collapsible>
        ))}
      </ul>
      <ul className="experienceListForm">
        {/**not using experience but need it since 2nd parameter is index */}
        {experienceList.map((experience, index) => (
          <Collapsible name="Experience Info Form" index={index + 1}>
            <li key={index} className="experienceForm">
              <ExperienceForm
                index={index}
                experienceList={experienceList}
                setExperienceList={setExperienceList}
              />
            </li>
          </Collapsible>
        ))}
      </ul>
    </div>
  );
}
