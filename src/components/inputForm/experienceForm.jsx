import "../../styles/inputForm/experienceForm.css";
import { useState } from "react";
import Collapsible from "./collapsible.jsx";
import ResponsibilityForm from "./responsibilityForm.jsx";

export default function ExperienceForm({
  index,
  experienceList,
  setExperienceList,
}) {
  const handleChange = (infoType, infoProperty) => {
    const newList = [...experienceList];
    newList[index][infoType] = infoProperty;
    setExperienceList(newList);
  };

  //create a true copy rather than one by reference to prevent them from affecting each other
  const [originalExperienceList, setOriginalExperienceList] = useState(
    JSON.parse(JSON.stringify(experienceList))
  );
  const simulateToggleForm = () => {
    const toggleStateButton = document.querySelector(
      `div.experienceInfoForm${index + 1} button`
    );
    toggleStateButton.click();
  };

  const deleteExperience = (e) => {
    e.preventDefault();
    const newList = [...experienceList];
    newList.splice(index, 1);
    setExperienceList(newList);
    simulateToggleForm();
  };

  const addResponsibility = () => {
    const newList = [...experienceList];
    newList[index].responsibilityList.push({
      name: "",
      description: "",
    });
    setExperienceList(newList);
  };

  const revert = (e) => {
    e.preventDefault();
    setExperienceList(originalExperienceList);
    simulateToggleForm();
  };
  const submit = (e) => {
    e.preventDefault();
    //create a true copy rather than one by reference to prevent them from affecting each other
    setOriginalExperienceList(JSON.parse(JSON.stringify(experienceList)));
    simulateToggleForm();
  };
  return (
    <form className="experienceForm" onSubmit={(e) => e.preventDefault()}>
      <h2>Experience Info Form {index + 1}</h2>
      <label>
        Enter the Name of the Work Place:
        <input
          type="text"
          value={experienceList[index].facility}
          onChange={(e) => handleChange("facility", e.target.value)}
        ></input>
      </label>
      <label>
        Enter your Title at the Work Place:
        <input
          type="text"
          value={experienceList[index].title}
          onChange={(e) => handleChange("title", e.target.value)}
        ></input>
      </label>
      <label>
        Enter the Location of the Work Place:
        <input
          type="text"
          value={experienceList[index].location}
          onChange={(e) => handleChange("location", e.target.value)}
        ></input>
      </label>
      <label>
        Enter the Time Spent at the Work Place:
        <input
          type="text"
          value={experienceList[index].time}
          onChange={(e) => handleChange("time", e.target.value)}
        ></input>
      </label>
      <ul className="responsibilityListForm">
        <button className="addResponsibility" onClick={addResponsibility}>
          Add New Responsibility
        </button>
        {/**not using responsibility but need it since 2nd parameter is index */}
        {experienceList[index].responsibilityList.map((responsibility, i) => (
          <li key={i} index={i + 1} className="responsibilityForm">
            <Collapsible
              name="Responsibility Info Form"
              formName="responsibilityListForm"
              index={i + 1}
            >
              <ResponsibilityForm
                experienceIndex={index}
                index={i}
                experienceList={experienceList}
                setExperienceList={setExperienceList}
              />
            </Collapsible>
          </li>
        ))}
      </ul>
      <div className="formButtons">
        <button className="cancelButton" onClick={(e) => revert(e)}>
          Cancel
        </button>
        <button className="submitButton" onClick={(e) => submit(e)}>
          Submit
        </button>
      </div>
      <button className="deleteExperience" onClick={(e) => deleteExperience(e)}>
        Delete Experience
      </button>
    </form>
  );
}
