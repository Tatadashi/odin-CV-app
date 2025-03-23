import "../../styles/inputForm/responsibilityForm.css";

export default function ResponsibilityForm({
  experienceIndex,
  index,
  experienceList,
  setExperienceList,
}) {
  const handleChange = (infoType, infoProperty) => {
    const newList = [...experienceList];
    newList[experienceIndex].responsibilitiesList[index][infoType] =
      infoProperty;
    setExperienceList(newList);
  };

  const deleteResponsibility = () => {
    const newList = [...experienceList];
    newList[experienceIndex].responsibilitiesList.splice(index, 1);
    setExperienceList(newList);
  };
  return (
    <div className="responsibilityForm">
      <label>
        Enter the Name of the Responsibility at the Work Place:
        <input
          type="text"
          value={
            experienceList[experienceIndex].responsibilitiesList[index].name
          }
          onChange={(e) => handleChange("name", e.target.value)}
        ></input>
      </label>
      <label>
        Enter the Description of the Responsibility at the Work Place:
        <textarea
          rows="8"
          type="text"
          value={
            experienceList[experienceIndex].responsibilitiesList[index]
              .description
          }
          onChange={(e) => handleChange("description", e.target.value)}
        ></textarea>
      </label>
      <button className="deleteResponsibility" onClick={deleteResponsibility}>
        Delete Responsibility
      </button>
    </div>
  );
}
