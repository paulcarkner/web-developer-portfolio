import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="app">
      <Card
        imgSrc="/Assets/wordle-solver.jpg"
        title="WordleSolver"
        tags="HTML, CSS, JavaScript, React"
        codeUrl="http://somelink.com"
        previewUrl="http://somelink.com"
      >
        Here is my text.
      </Card>
      <Card
        imgSrc="/Assets/weather-app.jpg"
        title="Weather App"
        tags="HTML, CSS, JavaScript, React"
        codeUrl="http://somelink.com"
        previewUrl="http://somelink.com"
      >
        Weather app text. 
      </Card>
      <Card
        imgSrc="/Assets/2048-game.jpg"
        title="2048 Game (Clone)"
        tags="HTML, CSS, JavaScript, jQuery"
        codeUrl="http://somelink.com"
        previewUrl="http://somelink.com"
      >
        Recreation of 2048 game. 
      </Card>
      {/* 2 wedding websites */}
      {/* resume */}
      {/* web-dev portfolio */}
    </div>
  );
}

export default App;
