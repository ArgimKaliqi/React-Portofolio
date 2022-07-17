import React from "react";
import "./skills.css";
import { HiBadgeCheck } from "react-icons/hi";

const Skills = () => {
  return (
    <section id="skills">
    
    <h2 className="s-h2">Professional Skills</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <HiBadgeCheck className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Proficient</small>
            </div>
          </article>

          <article className="experience__details">
            <HiBadgeCheck className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Proficient</small>
            </div>
          </article>

          <article className="experience__details">
            <HiBadgeCheck className="experience__details-icon" />
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Competent</small>
            </div>
          </article>

          <article className="experience__details">
            <HiBadgeCheck className="experience__details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-light">Advanced Beginner</small>
            </div>
          </article>
        </div>
      </div>

      {/* end of frontend*/}

      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <HiBadgeCheck className="experience__details-icon" />
            <div>
              <h4>Java</h4>
              <small className="text-light">Proficient</small>
            </div>
          </article>

          <article className="experience__details">
            <HiBadgeCheck className="experience__details-icon" />
            <div>
              <h4>.NET</h4>
              <small className="text-light">Competent</small>
            </div>
          </article>

          <article className="experience__details">
            <HiBadgeCheck className="experience__details-icon" />
            <div>
              <h4>SQL Database</h4>
              <small className="text-light">Proficient</small>
            </div>
          </article>
          <article className="experience__details">
            <HiBadgeCheck className="experience__details-icon" />
            <div>
              <h4>TypeScript</h4>
              <small className="text-light">Proficient</small>
            </div>
          </article>

          
        </div>
      </div>
    </div>
  </section>
  )
}
   
export default Skills;

