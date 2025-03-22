import "../../styles/cv/personalSection.css";

export default function personalSection({ info }) {
  return (
    <section className="personalSection">
      <div>
        <h3 className="personalSectionName">{info.name}</h3>
        <h4 className="personalSectionOtherInfo">{info.website}</h4>
      </div>
      <div className="personalSectionRightPart">
        <h4 className="personalSectionOtherInfo">Email: {info.email}</h4>
        <h4 className="personalSectionOtherInfo">Phone: {info.phone} </h4>
        <h4 className="personalSectionOtherInfo">Github: {info.github}</h4>
      </div>
    </section>
  );
}
