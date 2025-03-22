import "../../styles/inputForm/educationForm.css";

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

  return (
    <div className="educationForm">
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
    </div>
  );
}
