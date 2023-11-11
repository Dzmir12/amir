import React from "react";
import SubHead from "../SubHead/SubHead";
import style from "./Skills.module.css";
import Spline from "@splinetool/react-spline";
import web from "./../../assets/icons8-web-development-100.png";
import ui from "./../../assets/icons8-ui-100.png";
import { useMediaQuery } from "react-responsive";


function Skills() {

    const isWeb = useMediaQuery({ query: '(max-width: 1382px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 862px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 581px)' });


  return (
    <div className={style.skills}>
      <SubHead subtitle={"What Skills I Have"} title={"My Experience"} />
      <h3 className={style.skillsWarning}>{`(🎧 Increase The Volume)`}</h3>
      <div className={` ${isWeb ?style.skillsContainerFixed :style.skillsContainer}`}>
        <div className={` ${isWeb ?style.splineFixed :style.spline} ${isMobile ?style.splineFixed2 :style.spline}`}>
          <Spline scene="https://prod.spline.design/RFHPRMh6YeW5JKVk/scene.splinecode" />
      
        </div>

        <div className={` ${isWeb ?style.textFixed :style.text} ${isTablet ?style.textFixed2 :style.text}`}>
          <div className={style.mySkillsContainer}>
            <img src={web} className={style.mySkillsimg} />
            <div className={` ${isWeb ?style.mySkillsFixed :style.mySkills} ${isMobile ?style.mySkillsFixed2 :style.mySkills}`}>
              <div className={` ${isMobile ?style.SkillsContainerFixed :style.SkillsContainer}`}>
                <h2 className={style.mySkillsH2}>{`<.Html>`}</h2>
                <h2 className={style.mySkillsH2Fixed}>.Css</h2>
              </div>

              <div className={` ${isMobile ?style.SkillsContainerFixed :style.SkillsContainer}`}>
                <h2 className={style.mySkillsH2}>.JavaScript</h2>
                <h2 className={style.mySkillsH2}>{`</.React>`}</h2>
              </div>

            </div>
          </div>
          

          <div className={style.mySkillsContainer}>
            <img src={ui} className={style.mySkillsimg} />
            <div className={` ${isWeb ?style.mySkills2Fixed :style.mySkills2} ${isTablet ?style.mySkills2Fixed2 :style.mySkills2} ${isMobile ?style.mySkills2Fixed3 :style.mySkills2}`}>
              <div className={` ${isMobile ?style.SkillsContainerFixed :style.SkillsContainer} ${isMobile ?style.SkillsContainerFixed2 :style.SkillsContainer}`}>
                <h2 className={style.mySkillsH2}>.Figma</h2>
                <h2 className={` ${isMobile ?style.mySkillsH2Fixed2 :style.mySkillsH2Fixed}`}>.spline</h2>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Skills;
