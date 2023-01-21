import React from "react";
import Style from "./About.module.css";

import SkillsBars from "../Components/SkillsBars";

export default function About() {
  return (
    <section id="about" className="sunken">
      <div className="container">
        <h1>About Me</h1>
        <div className={Style.aboutGrid}>
          <div>
            <p>
              I've been writing webpages since the &lt;table&gt; element was
              introduced. My first websites were little personal tools and
              fooling around with different technologies as they came around.
            </p>
            <p>
              I've done full-stack development on multiple websites using
              ASP.NET C# (MVC), T-SQL, and jQuery hosted on the Azure Cloud.
              I've also dabbled with SignalR, Serverless Functions, CDN and
              writing APIs. Being self-employed also meant I did all of the DNS
              and domain management for all of my websites.
            </p>
            <p>
              Using CSS extensively, wherever possible, is a passion of mine.
              Why use a 30kB image or complicated animation script when 3 lines
              of CSS can do the same thing? (Ironically, the animation in the
              hero of this page is a 10 line script, not CSS.)
            </p>
            <p>
              This past year I have been learning and implimenting React and
              TypeScript in my projects.
            </p>
          </div>
          <div className={Style.skillContainer}>
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
