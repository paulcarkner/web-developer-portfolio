import React from "react";
import Style from "./Hero.module.css";
import "../Assets/portrait-1080p-crop.jpg";

//import logo images
//folder images import from https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const logoImgs = importAll(
  require.context("../Assets/Logos", false, /\.(svg|png)$/)
);

var charPos = 0;
const chars = [
  "a quick learner",
  "a natural leader",
  "creative",
  "a talented problem solver",
  "accountable",
  "professional",
  "easy to work with",
  "dependable",
  "driven",
  "supportive",
  "friendly",
  "an excellent communicator",
  "a team player",
];
var charTimer = -1;

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Hero() {
  if (charTimer > 0) clearInterval(charTimer); //prevents loading of interval function twice by debugging software
  charTimer = setInterval(async () => {
    let textEl = document.getElementById("heroCharacterText");
    textEl.classList.add("fade");
    await timeout(500);
    charPos = (charPos + 1) % chars.length;
    textEl.textContent = chars[charPos];
    textEl.parentNode.style.width = textEl.getBoundingClientRect().width + "px";
    textEl.classList.remove("fade");
  }, 3000);
  return (
    <div className={Style.Hero}>
      <div className={`${Style.container} container`}>
        <menu className={Style.Menu}>
          <div className={Style.title}>
            Paul<b>Carkner</b>
          </div>
          <a href="#about">About Me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#resume">Resume</a>
        </menu>
        <div className={Style.Characteristics}>
          Paul is...
          <div>
            <div id="heroCharacterText">a quick learner</div>
          </div>
          .
        </div>
        <div className={Style.LogoGrid}>
          {Object.keys(logoImgs).map((img, index) => (
            <img
              src={logoImgs[img]}
              key={img}
              alt={img
                .substring(img.indexOf("-") + 1, img.length - 4)
                .replace("_", " ")}
            />
          ))}
          <div>More...</div>
        </div>
      </div>
    </div>
  );
}
