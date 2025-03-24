import "../../styles/cv/experience.css";
import Responsibility from "./responsibility.jsx";

export default function Experience({ info }) {
  return (
    <div className="experience">
      <div className="experienceFacility">
        <ul>
          <li>
            <h4>{info.facility}</h4>
          </li>
          <li>
            <i>{info.title}</i>
          </li>
        </ul>
        <div className="educationRightPart">
          <h4>{info.location}</h4>
          <i>{info.time}</i>
        </div>
      </div>
      <ul className="responsibilities">
        {info.responsibilityList.map((responsibility, index) => {
          return (
            <li key={index} className="responsibility">
              <Responsibility
                info={{
                  name: responsibility.name,
                  description: responsibility.description,
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
