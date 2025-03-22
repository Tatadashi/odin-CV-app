import "./styles/App.css";
import { useState } from "react";
import InputForm from "./components/inputForm/inputForm.jsx";
import Cv from "./components/cv/cv.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Name",
    website: "www.website.com",
    email: "email@gmail.com",
    phone: "+1 (123) 456-7890",
    github: "www.github.com",
  });
  const [educationList, setEducationList] = useState([
    {
      facility: "University of Yap",
      major: "Master of Yap in Yapology",
      GPA: "10.0",
      location: "YapTown, YA",
      time: "Jan. 0000 - Dec. 9999",
    },
    {
      facility: "Omega Prestigous School",
      major: "Master of Spending in Business",
      GPA: "0.00",
      location: "WallStreetBets, NY",
      time: "Mar. 2000 - Oct. 2002",
    },
  ]);
  const [experienceList, setExperienceList] = useState([
    {
      facility: "Church of Yap",
      title: "Yap God",
      location: "YapTown, YA",
      time: "Mar. 2000 - Mar. 2000",
      responsibilitiesList: [
        {
          name: "Yapping",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          name: "Important Things",
          description: "Lorem.",
        },
      ],
    },
    {
      facility: "Huge Corporation",
      title: "A Higher Up",
      location: "Los Angeles, CA",
      time: "Jan. 2020 - Present",
      responsibilitiesList: [
        {
          name: "Creating Meetings",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          name: "Restructuring",
          description:
            "Lorem. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <InputForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        educationList={educationList}
        setEducationList={setEducationList}
        experienceList={experienceList}
        setExperienceList={setExperienceList}
      />
      <Cv personalInfo={personalInfo} educationList={educationList} experienceList={experienceList}  />
    </div>
  );
}

export default App;
