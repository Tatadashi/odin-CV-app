import "../../styles/inputForm/educationForm.css";
import { useState } from "react";

export default function EducationForm({
  index,
  educationList,
  setEducationList,
}) {
  const handleChange = (infoType, infoProperty) => {
    const newList = [...educationList];
    newList[index][infoType] = infoProperty;
    setEducationList(newList);
  };

  //create a true copy rather than one by reference to prevent them from affecting each other
  const [originalEducationList, setOriginalEducationList] = useState(
    JSON.parse(JSON.stringify(educationList))
  );
  const simulateToggleForm = () => {
    const toggleStateButton = document.querySelector(
      `div.educationInfoForm${index + 1} button`
    );
    toggleStateButton.click();
  };

  const deleteEducation = (e) => {
    e.preventDefault();
    const newList = [...educationList];
    newList.splice(index, 1);
    setEducationList(newList);
    simulateToggleForm();
  };

  const revert = (e) => {
    e.preventDefault();
    setEducationList(originalEducationList);
    simulateToggleForm();
  };
  const submit = (e) => {
    e.preventDefault();
    //create a true copy rather than one by reference to prevent them from affecting each other
    setOriginalEducationList(JSON.parse(JSON.stringify(educationList)));
    simulateToggleForm();
  };
  return (
    <form className="educationForm" onSubmit={(e) => e.preventDefault()}>
      <h2>Education Info Form {index + 1}</h2>
      <label>
        Enter the Name of the Education Facility:
        <input
          type="text"
          value={educationList[index].facility}
          onChange={(e) => handleChange("facility", e.target.value)}
        ></input>
      </label>
      <label>
        Enter your Major:
        <input
          type="text"
          value={educationList[index].major}
          onChange={(e) => handleChange("major", e.target.value)}
        ></input>
      </label>
      <label>
        Enter your GPA:
        <input
          type="text"
          value={educationList[index].GPA}
          onChange={(e) => handleChange("GPA", e.target.value)}
        ></input>
      </label>
      <label>
        Enter the Location of the Education Facility:
        <input
          type="text"
          value={educationList[index].location}
          onChange={(e) => handleChange("location", e.target.value)}
        ></input>
      </label>
      <label>
        Enter the Time Enrolled at the Education Facility:
        <input
          type="text"
          value={educationList[index].time}
          onChange={(e) => handleChange("time", e.target.value)}
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
      <button className="deleteEducation" onClick={(e) => deleteEducation(e)}>
        Delete Education {index + 1}
      </button>
    </form>
  );
}
