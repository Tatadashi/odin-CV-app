import "../../styles/cv/experience.css";
import Responsibility from "./responsibility.jsx";

export default function Experience({ form }) {
  return (
    <div className="experience">
      <div className="experienceFacility">
        <ul>
          <li>
            <h4>{form.experienceFacility}</h4>
          </li>
          <li>
            <i>{form.experienceTitle}</i>
          </li>
        </ul>
        <div className="educationRightPart">
          <h4>{form.experienceLocation}</h4>
          <i>{form.experienceTime}</i>
        </div>
      </div>
      {/*this part needs to be a function taking in 2d array or array of obj*/}
      <ul className="experienceResponsibilities">
        <Responsibility
          form={{
            responsibility: "Yappa",
            responsibilityDescription:
              "Lorem Ipsum Generator 5 Paragraphs Copy Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehende rit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          }}
        />
      </ul>
    </div>
  );
}
