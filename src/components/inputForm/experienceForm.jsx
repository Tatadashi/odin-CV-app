import "../../styles/inputForm/experienceForm.css";
import ResponsibilityForm from "./responsibilityForm";

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
  return (
    <div className="experienceForm">
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
      <ul className="responsibilitiesListForm">
        {/**not using responsibility but need it since 2nd parameter is index */}
        {experienceList[index].responsibilitiesList.map((responsibility, i) => (
          <li key={i} className="responsibilitiesForm">
            <ResponsibilityForm
              experienceIndex={index}
              index={i}
              experienceList={experienceList}
              setExperienceList={setExperienceList}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
