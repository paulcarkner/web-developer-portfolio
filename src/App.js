import "reset-css";
import Style from "./App.module.css";
import bgPortrait from "./Assets/portrait-1080p.jpg";
import game2048Img from "./Assets/2048-game.jpg";
import weatherAppImg from "./Assets/weather-app.jpg";
import worldSolverImg from "./Assets/wordle-solver.jpg";
import Card from "./Components/Card";

//Styles set programatically so App can be used as sub-module in portfolio
const htmlStyles = {
  position: "relative",
  width: "100vw",
  height: "100vh",
};

const bodyStyles = {
  position: "absolute",
  inset: 0,
  backgroundColor: "#000",
  backgroundImage: `url(${bgPortrait})`,
  backgroundPosition: "right center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  color: "#fff",
  fontSize: "12px",
  fontFamily: "'Roboto', sans-serif",
  webkitFontSmoothing: "antialiased",
  mozOsxFontSmoothing: "grayscale",
};

export default function App() {
  //Set HTML and BODY styles programatically
  for (let key in htmlStyles)
    document.getElementsByTagName("html")[0].style[key] = htmlStyles[key];

  for (let key in bodyStyles) document.body.style[key] = bodyStyles[key];

  return (
    <div className={Style.App}>
      <Card
        imgSrc={worldSolverImg}
        title="WordleSolver"
        tags="HTML, CSS, JavaScript, React"
        codeUrl="http://somelink.com"
        previewUrl="/wordle-solver"
      >
        Here is my text.
      </Card>
      <Card
        imgSrc={weatherAppImg}
        title="Weather App"
        tags="HTML, CSS, JavaScript, React"
        codeUrl="http://somelink.com"
        previewUrl="/weather-app"
      >
        Weather app text.
      </Card>
      <Card
        imgSrc={game2048Img}
        title="2048 Game (Clone)"
        tags="HTML, CSS, JavaScript, jQuery"
        codeUrl="http://somelink.com"
        previewUrl="/2048"
      >
        Recreation of 2048 game.
      </Card>
      {/* 2 wedding websites */}
      {/* resume */}
      {/* web-dev portfolio */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
    </div>
  );
}
