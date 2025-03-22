import "../../styles/inputForm/personalForm.css";

export default function PersonalForm({ personalInfo, setPersonalInfo }) {
  const handleChange = (infoType, infoProperty) => {
    setPersonalInfo({
      ...personalInfo,
      [infoType]: infoProperty,
    });
  };

  return (
    <div className="personalForm">
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
    </div>
  );
}
