import "./App.css";
import "./Assets/portrait-1080p.jpg";
import game2048Img from "./Assets/2048-game.jpg";
import weatherAppImg from "./Assets/weather-app.jpg";
import worldSolverImg from "./Assets/wordle-solver.jpg";
import Card from "./Components/Card";

export default function App() {
  return (
    <div className="app">
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
        previewUrl="http://somelink.com"
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
    </div>
  );
}