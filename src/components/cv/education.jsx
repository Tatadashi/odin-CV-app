import "../../styles/cv/education.css";

export default function Education({ info }) {
  return (
    <>
      <div>
        <ul className="educationLeftPart">
          <li>
            <h4>{info.facility}</h4>
          </li>
          <li>
            <i>
              {info.major}; GPA: {info.GPA}
            </i>
          </li>
        </ul>
      </div>
      <div className="educationRightPart">
        <h4>{info.location}</h4>
        <i>{info.time}</i>
      </div>
    </>
  );
}
