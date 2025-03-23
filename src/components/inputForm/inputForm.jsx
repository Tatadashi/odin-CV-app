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
  const addEducation = () => {
    const newList = [...educationList];
    newList.push({
      facility: "",
      major: "",
      GPA: "",
      location: "",
      time: "",
    });
    setEducationList(newList);
  };

  const addExperience = () => {
    const newList = [...experienceList];
    newList.push({
      facility: "",
      title: "",
      location: "",
      time: "",
      responsibilitiesList: [],
    });
    setExperienceList(newList);
  };
  return (
    <div className="inputForm">
      <Collapsible name="Personal Info Form">
        <PersonalForm
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      </Collapsible>
      <ul className="educationListForm">
        <button className="addEducation" onClick={addEducation}>
          Add New Education
        </button>
        {/**not using education but need it since 2nd parameter is index */}
        {educationList.map((education, index) => (
          <li key={index} className="educationForm">
            <Collapsible name="Education Info Form" index={index + 1}>
              <EducationForm
                index={index}
                educationList={educationList}
                setEducationList={setEducationList}
              />
            </Collapsible>
          </li>
        ))}
      </ul>
      <ul className="experienceListForm">
        <button className="addExperience" onClick={addExperience}>
          Add New Experience
        </button>
        {/**not using experience but need it since 2nd parameter is index */}
        {experienceList.map((experience, index) => (
          <li key={index} className="experienceForm">
            <Collapsible name="Experience Info Form" index={index + 1}>
              <ExperienceForm
                index={index}
                experienceList={experienceList}
                setExperienceList={setExperienceList}
              />
            </Collapsible>
          </li>
        ))}
      </ul>
    </div>
  );
}
