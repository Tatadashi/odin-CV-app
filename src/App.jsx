import "./styles/App.css";
import TopSection from "./components/cv/topSection.jsx";
import EducationSection from "./components/cv/educationSection.jsx";
import ExperienceSection from "./components/cv/experienceSection.jsx";

function App() {
  return (
    //resume template
    <>
      <TopSection
        form={{
          name: "Name",
          website: "google.com",
          email: "email@gmail.com",
          phone: "+1 (123) 456-7890",
          github: "github.com",
        }}
      />
      <EducationSection />
      <ExperienceSection />
    </>
  );
}

export default App;
