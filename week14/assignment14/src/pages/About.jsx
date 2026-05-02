import MyImage from "../assets/profile_pic.jpg";

function About() {
  return (
    <div className="about-div">
      <h3>Kevin Pitman, Master of Arts in Graphic and Web Design, MCAD</h3>

      <section className="about">
        <p>
          Kevin is currently enrolled in the Master of Arts in Graphic and Web
          Design program at Minneapolis College of Art and Design. Through this
          Programming for Web course, he has created and developed numerous
          animations in the p5.js distribution, as highlighted on this site.
          This site itself is a demonstration of his skills developing a page
          using React.
        </p>
        <img
          src={MyImage}
          alt="Set photo from JourneyQuest"
          className="krp-image"
        />
      </section>
    </div>
  );
}
export default About;
