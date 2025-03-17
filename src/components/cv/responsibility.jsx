import "../../styles/cv/responsibility.css";

export default function Responsibility({ form }) {
  return (
    <li className="responsibility">
      <h4>{form.responsibility}:&nbsp;</h4>
      <p className="responsibilityDescription">
        {form.responsibilityDescription}
      </p>
    </li>
  );
}
