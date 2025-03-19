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
      <ul className="experienceResponsibilities">
        {form.responsibilitiesList.map(responsibility => {
          return (
            <li key={responsibility.name} className="experienceResponsibility">
              <Responsibility
                info={{
                  responsibility: responsibility.name,
                  responsibilityDescription: responsibility.description,
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
