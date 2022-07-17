import "./about.css";
import Award from "../../img/award.png";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/7014764/pexels-photo-7014764.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Currently in the final year of my degree programme with a planned completion date of Jun 2023
        </p>
        <p className="a-desc">
        During the degree I have continued to enhance my knowledge and 
        gain practical experience where possible. The study programme 
        has allowed me to develop my analytical skills and enhance 
        team working through group projects.I am a strong communicator with
         good time management skills with a can do attitude and a willingness 
         to learn from those around me.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

