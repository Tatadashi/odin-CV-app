import "../../styles/inputForm/personalForm.css";
import { useState } from "react";

export default function PersonalForm({ personalInfo, setPersonalInfo }) {
  const handleChange = (infoType, infoProperty) => {
    setPersonalInfo({
      ...personalInfo,
      [infoType]: infoProperty,
    });
  };

  const [originalInfo, setOriginalInfo] = useState(personalInfo);
  const simulateToggleForm = () => {
    const toggleStateButton = document.querySelector(
      "div.personalInfoForm button"
    );
    toggleStateButton.click();
  };
  const revert = (e) => {
    e.preventDefault();
    setPersonalInfo(originalInfo);
    simulateToggleForm();
  };
  const submit = (e) => {
    e.preventDefault();
    setOriginalInfo(personalInfo);
    simulateToggleForm();
  };

  return (
    <form className="personalForm" onSubmit={(e) => e.preventDefault()}>
      <h2>Personal Info Form</h2>
      <label>
        Enter your Name:
        <input
          type="text"
          value={personalInfo.name}
          onChange={(e) => handleChange("name", e.target.value)}
        ></input>
      </label>
      <label>
        Enter your Website:
        <input
          type="text"
          value={personalInfo.website}
          onChange={(e) => handleChange("website", e.target.value)}
        ></input>
      </label>
      <label>
        Enter your Email:
        <input
          type="text"
          value={personalInfo.email}
          onChange={(e) => handleChange("email", e.target.value)}
        ></input>
      </label>
      <label>
        Enter your Phone:
        <input
          type="text"
          value={personalInfo.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        ></input>
      </label>
      <label>
        Enter your Github:
        <input
          type="text"
          value={personalInfo.github}
          onChange={(e) => handleChange("github", e.target.value)}
        ></input>
      </label>
      <div className="formButtons">
        <button className="cancelButton" onClick={(e) => revert(e)}>
          Cancel
        </button>
        <button className="submitButton" onClick={(e) => submit(e)}>
          Submit
        </button>
      </div>
    </form>
  );
}
