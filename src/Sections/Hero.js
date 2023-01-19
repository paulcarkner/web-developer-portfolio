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
); //import all logos in "../Assets/Logos" and add logos to array

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
]; //attribute list for hero animation
var charTimer = -1;

//async/await inline delay used for animation
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Hero() {
  if (charTimer > 0) clearInterval(charTimer); //prevents loading of interval function twice by debugging software
  charTimer = setInterval(async () => {
    let textEl = document.getElementById("heroCharacterText");
    textEl.classList.add("fade"); //set "fade" class animation (fade out)
    await timeout(500); //wait 0.5s
    charPos = (charPos + 1) % chars.length; //increment counter and loop to beginning
    textEl.textContent = chars[charPos]; //get next character attribute from list
    textEl.parentNode.style.width = textEl.getBoundingClientRect().width + "px"; //set text container width
    textEl.classList.remove("fade"); //remove "fade" class animation (fade in)
  }, 3000);
  return (
    <div className={Style.hero}>
      <div className={`${Style.container} container`}>
        <menu className={Style.menu}>
          <div className={Style.title}>
            Paul<b>Carkner</b>
          </div>
          <a href="#about">About Me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#resume">Resume</a>
        </menu>
        <div className={Style.characteristics}>
          Paul is...
          <div>
            <div id="heroCharacterText">a quick learner</div>{/* this is an animated element with changing text */}
          </div>
          .
        </div>
        <div className={Style.logoGrid}>
          {Object.keys(logoImgs).map((img, index) => ( //create grid of logos
            <img
              src={logoImgs[img]}
              key={img}
              alt={img
                .substring(img.indexOf("-") + 1, img.length - 4)
                .replace("_", " ")} //slice logo name from file name
            />
          ))}
          <div>More...</div>
        </div>
      </div>
    </div>
  );
}
