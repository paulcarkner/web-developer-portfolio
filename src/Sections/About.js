import React from "react";
import Style from "./About.module.css";

import SkillsBars from "../Components/SkillsBars";

export default function About() {
  return (
    <section id="about" className={`${Style.About} sunken`}>
      <div className="container">
        <h1>About Me</h1>
        <div className={Style.AboutGrid}>
          <div>
            <p>
              I've been writing webpages since the &lt;table&gt; element was
              introduced. 
            </p>
          </div>
          <div className={Style.SkillContainer}>
            <h2>Skill Proficiency</h2>
            <SkillsBars name="HTML5" value="5,000+ hr" barCount={5} />
            <SkillsBars name="CSS3" value="5,000+ hr" barCount={5} />
            <SkillsBars name="JS (ES6+)" value="5,000+ hr" barCount={5} />
            <SkillsBars name="React" value="100+ hr" barCount={2} />
            <SkillsBars name="TypeScript" value="10+ hr" barCount={1} />
            <SkillsBars name="C# (ASP>NET)" value="2,000+ hr" barCount={3} />
            <SkillsBars name="T-SQL" value="200+ hr" barCount={2} />
            <SkillsBars name="jQuery" value="2,000+ hr" barCount={5} />
            <SkillsBars name="GitHub" value="10+ hr" barCount={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
