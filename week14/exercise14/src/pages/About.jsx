import { Form } from "react-router-dom";
import MyImage from "../assets/kids.jpg";

function About() {
  return (
    <div className="about-div">
      <h2>Kevin Pitman</h2>
      <h3>Master of Arts in Graphic and Web Design, MCAD</h3>
      <section className="about">
        <p>
          Kevin is currently enrolled in the Master of Arts in Graphic and Web
          Design program at Minneapolis College of Art and Design. Through this
          Programming for Web course, he has created and developed numerous
          projects and components, as highlighted on this site. This site itself
          is a demonstration of his skills developing a page using React.
        </p>
        <p>Look at that handsome fellow.</p>
      </section>
      <img
        src={MyImage}
        alt="Childhood photo of developer"
        className="krp-image"
      />
    </div>
  );
}
export default About;
