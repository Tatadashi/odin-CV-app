import "../../styles/cv/education.css";

export default function Education({ form }) {
  return (
    <div className="education">
      <div>
        <ul className="educationList">
          <li>
            <h4>{form.educationFacility}</h4>
          </li>
          <li>
            <i>{form.educationMajorAndGPA}</i>
          </li>
        </ul>
      </div>
      <div className="educationRightPart">
        <h4>{form.educationLocation}</h4>
        <i>{form.educationTime}</i>
      </div>
    </div>
  );
}
