"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//home의 투명도를 조절하여 스크롤을 할 때 점점 투명하게 만들기. 그리고 arrowup 나타나게 하기.
const home = document.querySelector(".home__container");
const arrowup = document.querySelector(".arrowup");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
  if (window.scrollY > homeHeight) {
    arrowup.classList.add("visible");
  } else {
    arrowup.classList.remove("visible");
  }
});

//arrowup버튼 누르면 맨 위로 올라가기
arrowup.addEventListener("click", () => {
  scrollIntoView("#home");
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", () => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  scrollIntoView(link);
});

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("visible");
});

const homeContact = document.querySelector(".home__contact");
homeContact.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
  navbarMenu.classList.toggle("visible");
}

//프로젝트 버튼 누르면 분류해주는 코드
const workProject = document.querySelector(".work__projects");
const kindofProject = document.querySelectorAll(".category__btn");
for (let i = 0; i < kindofProject.length; i++) {
  kindofProject[i].addEventListener("click", (e) => {
    const select =
      e.target.dataset.select || e.target.parentNode.dataset.select;
    if (select == null) {
      return;
    }

    const active = document.querySelector(".category__btn.selected");
    active.classList.remove("selected");
    const target =
      e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
    target.classList.add("selected");

    workProject.classList.add("invisible");
    setTimeout(() => {
      classifyProject(select);
      workProject.classList.remove("invisible");
    }, 300);
  });
}

function classifyProject(select) {
  const project = document.querySelectorAll(".project");
  if (select == "all") {
    for (let i = 0; i < project.length; i++) {
      if (project[i].nodeName == "A") {
        project[i].style.display = "flex";
      }
    }
  } else if (select == "front-only") {
    for (let i = 0; i < project.length; i++) {
      if (
        project[i].nodeName == "A" &&
        project[i].dataset.kindof == "front-end"
      ) {
        project[i].style.display = "flex";
      } else {
        project[i].style.display = "none";
      }
    }
  } else if (select == "back-only") {
    for (let i = 0; i < project.length; i++) {
      if (
        project[i].nodeName == "A" &&
        project[i].dataset.kindof == "back-end"
      ) {
        project[i].style.display = "flex";
      } else {
        project[i].style.display = "none";
      }
    }
  }
}
