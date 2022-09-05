import Header from "./header/Header";
import Body from "./body/Body";

function CoursesSection(props) {
  return (
    <section className="courses-section">
      <Header title={props.title} />
      <Body description={props.description}></Body>
    </section>
  );
}
export default CoursesSection;
