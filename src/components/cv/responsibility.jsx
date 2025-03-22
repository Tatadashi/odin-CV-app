import "../../styles/cv/responsibility.css";

export default function Responsibility({ info }) {
  return (
    <>
      <h4 className="responsibilityName">{info.name}:&nbsp;</h4>
      <p className="responsibilityDescription">{info.description}</p>
    </>
  );
}
