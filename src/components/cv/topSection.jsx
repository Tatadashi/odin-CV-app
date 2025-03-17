import "../../styles/cv/topSection.css";

export default function TopSection({ form }) {
  return (
    <section className="topSection">
      <div>
        <h3 className="topSectionName">{form.name}</h3>
        <h4 className="topSectionOtherInfo">{form.website}</h4>
      </div>
      <div className="topSectionRightPart">
        <h4 className="topSectionOtherInfo">Email: {form.email}</h4>
        <h4 className="topSectionOtherInfo">Phone: {form.phone} </h4>
        <h4 className="topSectionOtherInfo">Github: {form.github}</h4>
      </div>
    </section>
  );
}
