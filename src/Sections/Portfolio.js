import React from "react";
import Style from "./Portfolio.module.css";
import Card from "../Components/Card";

import dashyImg from "../Assets/dash-y.jpg";
import game2048Img from "../Assets/2048-game.jpg";
import weatherAppImg from "../Assets/weather-app.jpg";
import worldSolverImg from "../Assets/wordle-solver.jpg";
import tmwpImg from "../Assets/tmwp.jpg";
import bmpImg from "../Assets/bmp.jpg";
import routerImg from "../Assets/react-router-color-inverted.png";
import resumeImg from "../Assets/resume.jpg";
import portfolioImg from "../Assets/portfolio.jpg";
import lightningImg from "../Assets/lightning.jpg";
import connect4Img from "../Assets/connect4.jpg";

export default function Portfolio() {
  return (
    <section id="portfolio" className={Style.portfolio}>
      <div className="container">
        <h1>Web Developer Portfolio</h1>
        <div className={Style.cardContainer}>
          <Card
            imgSrc={dashyImg}
            title="Dash-y"
            tags="HTML, CSS, TypeScript, React, Redux"
            codeUrl="https://github.com/paulcarkner/personal-dashboard"
            previewUrl="https://dash-y.xyz"
          >
            A sample personal dashboard built using TypeScript and Redux that
            collects data from real and simulated APIs and displays the data in
            various ways - lists, charts, graphics, SVG. A functioning
            Notes/Checklist feature and light/dark mode. Responsive design.
          </Card>
          <Card
            imgSrc={worldSolverImg}
            title="WordleSolver"
            tags="HTML, CSS, JavaScript, React"
            codeUrl="https://github.com/paulcarkner/wordle-solver"
            previewUrl="/wordle-solver"
          >
            Just like Wordle but backwards. A clone, look-a-like of the online
            game but you enter your guesses and letter colours and the app will
            tell you which possible words are left and which word will give the
            most information.
          </Card>
          <Card
            imgSrc={weatherAppImg}
            title="Weather App"
            tags="HTML, CSS, JavaScript, React"
            codeUrl="https://github.com/paulcarkner/WeatherWebApp"
            previewUrl="/weather-app"
          >
            A graphical weather forecast app. Background and map change to give
            a visual respresentation of current weather. Allows for the storage
            of multiple locations.
          </Card>
          <Card
            imgSrc={connect4Img}
            title="Connect 4"
            tags="HTML, CSS, Typescript, React"
            codeUrl="https://github.com/paulcarkner/connect4"
            previewUrl="/connect4/"
          >
            A recreation of the game &quot;Connect 4.&quot; Just a simple trial
            of Typescript with all graphics done using only CSS.
          </Card>
          <Card
            imgSrc={game2048Img}
            title="2048 Game (Clone)"
            tags="HTML, CSS, JavaScript, jQuery"
            codeUrl="https://github.com/paulcarkner/2048-game"
            previewUrl="/2048"
          >
            A recreation of the fun, time-killer game &quot;2048&quot;. Use the
            arrow keys to slide the tiles combining tiles of similar number.
          </Card>
          <Card
            imgSrc={tmwpImg}
            title="The Muskoka Wedding Photographer"
            tags="HTML, CSS, JavaScript, jQuery, Mobile Responsive"
            codeUrl=""
            previewUrl="http://themuskokaweddingphotographer.ca"
          >
            My personal wedding photography website. A mobile-friendly website
            built using jQuery and with custom full-screen image gallery.
          </Card>
          <Card
            imgSrc={bmpImg}
            title="Between Moments"
            tags="HTML, CSS, JavaScript, jQuery, Mobile Responsive"
            codeUrl=""
            previewUrl="http://betweenmoments.ca/Home/Old"
          >
            My previous personal wedding photography website. Self-written
            background parallax effect visible on wide screens.
          </Card>
          <Card
            imgSrc={routerImg}
            title="Domain Router"
            tags="React, React Router"
            codeUrl="https://github.com/paulcarkner/website-router"
            previewUrl=""
          >
            This website's router code. Uses "sub-modules" to incorporate
            individual Git repositories into a single portfolio.
          </Card>
          <Card
            imgSrc={resumeImg}
            title="Personal Resume"
            tags="HTML, CSS, CSS Print"
            codeUrl="https://github.com/paulcarkner/resume"
            previewUrl="/resume/"
          >
            Resume made with HTML and CSS to look like pages and prints
            similarly.
          </Card>
          <Card
            imgSrc={portfolioImg}
            title="Developer Portfolio"
            tags="HTML, CSS, JavaScript, React"
            codeUrl="https://github.com/paulcarkner/web-developer-portfolio"
            previewUrl=""
          >
            This page. A simple page built using React.
          </Card>
          <Card
            imgSrc={lightningImg}
            title="Lightning Solver"
            tags="HTML, CSS, JavaScript"
            codeUrl="https://github.com/paulcarkner/lightning"
            previewUrl="/lightning/"
          >
            A little challenge I did to make a lightning puzzle creater and
            solver. A grid of random walls is created then the shortest path
            from the top center tile to bottom row is found. Delays and
            colouring are added to the process to help visualize the algorithm.
          </Card>
        </div>
      </div>
    </section>
  );
}
