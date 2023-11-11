
import SubHead from "../SubHead/SubHead";
import style from "./AboutMe.module.css";


function AboutME() {
  return (
    <div className={style.aboutMe}>
      <SubHead subtitle={'Get To Know'} title={'About Me'}/>
      <div className={style.aboutMecontainer}>
      <h3>Hello, I'm Amir Abdi, a 23-year-old <span className={style.blue}>{`</Front-End Developer>`}</span> based in Tehran, Iran📍. I am passionate about creating engaging and user-friendly websites💻 that bring ideas to life. My journey in web development began with a desire to combine my creativity with my love for technology.</h3>
      </div>
    </div>
  );
}

export default AboutME;
