import React from "react";
import Style from "./Resume.module.css";

export default function Resume() {
  return (
    <section id="resume" className={`${Style.resume} sunken`}>
      <div className="container">
        <h1>Resume</h1>
        <div className={Style.resumeGrid}>
          <div>
            <h2>Work Experience</h2>
            <ul className={Style.none}>
              <li>
                <b>President &amp; Founder</b>
                <br />
                <i>QIXIQ Inc., 2011 - Present</i>
                <br />
                <p>
                  Developed several full-stack web apps through the prototype
                  stage including user account creation and management, user
                  content uploading and management, online sales processing,
                  image manipulation, and relational database design and
                  querying.
                </p>
                <p>
                  Most projects were built using a C# ASP.NET MVC/Razor back-end
                  framework and T-SQL/LINQ database interfaces which were
                  deployed to the Azure Cloud. The front-end was typically plain
                  HTML & CSS with a combination of Vanilla JS and jQuery. Both
                  server-side and client-side API handlers were frequently
                  written. SignalR was also incorporated in a recent project.
                </p>
                <p>
                  <a
                    href="http://themuskokaweddingphotographer.ca"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Muskoka Wedding Photographer
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                  <br />
                  <a
                    href="http://betweenmoments.ca/Home/Old"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Between Moments Photography (old site)
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                </p>
              </li>
              <li>
                <b>Enterprise Co-op Coordinator</b>
                <br />
                <i>University of Waterloo, 2011</i>
                <br />
                <p>
                  Developed a university program from the ground up to help
                  students launch their own companies, bringing in experts and
                  mentors in law, finance and entrepreneurship.
                </p>
              </li>
              <li>
                <b>PDEng Sr. Lead Mentor</b>
                <br />
                <i>University of Waterloo, 2007 - 2009, 2010 - 2011</i>
                <br />
                <p>
                  Led teams of up to 12 staff, overseeing multiple online
                  university engineering courses, managing hundreds of online
                  documents and thousands of student submissions.
                </p>
              </li>
              <li>
                <b>Prior Positions</b>
                <br />
                <ul className={Style.gapped}>
                  <li>
                    <i>
                      Systems Design Co-op Student, Grecar Ltd., 2005 (4 mo.)
                    </i>
                    <ul>
                      <li>Atmel microprocessor assembler coding</li>
                    </ul>
                  </li>
                  <li>
                    <i>
                      Systems Design Co-op Student, ATS Automation, 2004-2005
                      (12 mo.)
                    </i>
                    <ul>
                      <li>In-house software vision processing coding</li>
                    </ul>
                  </li>
                  <li>
                    <i>Program Director, Camp Kwasind, 2003 (4 mo.)</i>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2>Education</h2>
            <ul className={`${Style.none} ${Style.gapped}`}>
              <li>
                <b>MBA, Entrepeneurship</b>
                <br />
                Wilfrid Laurier University
                <br />
                2009 - 2010
              </li>
              <li>
                <b>B.Sc., Applied Physics</b>
                <br />
                University of Waterloo
                <br />
                2002 - 2007
              </li>
            </ul>
          </div>
          <div>
            <h2>Volunteer Work</h2>
            <ul className={Style.none}>
              <li>
                <b>Leadership Board Chair / Elder / Worship Leader</b> -
                Inniswood Baptist Church
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
