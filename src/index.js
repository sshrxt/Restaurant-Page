import "./style.css";
import { HomePage } from "./home";
import { MenuPage } from "./menu-page";
import Koala from "./assets/koala.jpg";
import { AboutPage } from "./about-page";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  content.appendChild(HomePage());

  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(MenuPage());
  });

  const homeBtn = document.getElementById("home");
  homeBtn.addEventListener("click", () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    const homePage = HomePage();
    content.appendChild(homePage);
    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", () => {
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
      content.appendChild(MenuPage());
    });
  });

  const menuBtn = document.getElementById("menu");
  menuBtn.addEventListener("click", () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(MenuPage());
  });

  const aboutBtn = document.getElementById("about");
  aboutBtn.addEventListener("click", () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(AboutPage());
  });
});
