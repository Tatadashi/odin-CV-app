import "../../styles/cv/responsibility.css";

export default function Responsibility({ info }) {
  return (
    <>
      <h4 className="responsibilityName">{info.responsibility}:&nbsp;</h4>
      <p className="responsibilityDescription">
        {info.responsibilityDescription}
      </p>
    </>
  );
}
