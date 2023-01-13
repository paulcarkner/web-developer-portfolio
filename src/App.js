import "reset-css";
import Style from "./App.module.css";
import Hero from "./Sections/Hero";
import Stats from "./Sections/About";
import Portfolio from "./Sections/Portfolio";
import Resume from "./Sections/Resume";
import Footer from "./Sections/Footer";

//Styles set programatically so App can be used as sub-module in portfolio
const htmlStyles = {
};

const bodyStyles = {
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "12px",
  fontFamily: "'Roboto', sans-serif",
};

export default function App() {
  //Set HTML and BODY styles programatically
  for (let key in htmlStyles)
    document.getElementsByTagName("html")[0].style[key] = htmlStyles[key];

  for (let key in bodyStyles) document.body.style[key] = bodyStyles[key];

  document.title = "Paul Carkner's Web Developer Portfolio";

  return (
    <div className={Style.App}>
      <Hero />
      <Stats />
      <Portfolio />
      <Resume />
      <Footer />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&family=Montserrat:wght@400;700&family=Qwitcher+Grypen&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
