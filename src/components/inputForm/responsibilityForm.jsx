import "../../styles/inputForm/responsibilityForm.css";
import { useState } from "react";

export default function ResponsibilityForm({
  experienceIndex,
  index,
  experienceList,
  setExperienceList,
}) {
  const handleChange = (infoType, infoProperty) => {
    const newList = [...experienceList];
    newList[experienceIndex].responsibilityList[index][infoType] = infoProperty;
    setExperienceList(newList);
  };

  //create a true copy rather than one by reference to prevent them from affecting each other
  const [originalExperienceList, setOriginalExperienceList] = useState(
    JSON.parse(JSON.stringify(experienceList))
  );
  const simulateToggleForm = () => {
    const toggleStateButton = document.querySelector(
      `div.responsibilityInfoForm${index + 1} button`
    );
    toggleStateButton.click();
  };

  const deleteResponsibility = () => {
    const newList = [...experienceList];
    newList[experienceIndex].responsibilityList.splice(index, 1);
    setExperienceList(newList);
    simulateToggleForm();
  };

  const revert = () => {
    setExperienceList(originalExperienceList);
    simulateToggleForm();
  };
  const submit = () => {
    //create a true copy rather than one by reference to prevent them from affecting each other
    setOriginalExperienceList(JSON.parse(JSON.stringify(experienceList)));
    simulateToggleForm();
  };
  return (
    <div className="responsibilityForm">
      <h2>Responsibility Info Form {index + 1}</h2>
      <label>
        Enter the Name of the Responsibility at the Work Place:
        <input
          type="text"
          value={experienceList[experienceIndex].responsibilityList[index].name}
          onChange={(e) => handleChange("name", e.target.value)}
        ></input>
      </label>
      <label>
        Enter the Description of the Responsibility at the Work Place:
        <textarea
          rows="8"
          type="text"
          value={
            experienceList[experienceIndex].responsibilityList[index]
              .description
          }
          onChange={(e) => handleChange("description", e.target.value)}
        ></textarea>
      </label>
      <div className="formButtons">
        <button className="cancelButton" onClick={revert}>
          Cancel
        </button>
        <button className="submitButton" onClick={submit}>
          Submit
        </button>
      </div>
      <button className="deleteResponsibility" onClick={deleteResponsibility}>
        Delete Responsibility {index + 1}
      </button>
    </div>
  );
}
