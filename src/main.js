function showPage(category) {
  let myPage = document.getElementById(category);
  let myBtn = document.getElementById(category + "_btn");

  let homeBtn = document.getElementById("home_btn");
  let programBtn = document.getElementById("program_btn");
  let btnArr = [homeBtn, programBtn];

  let homePage = document.getElementById("home");
  let programPage = document.getElementById("program");
  let pageArr = [homePage, programPage];

  for (let i in pageArr) {
    pageArr[i].style.display = "none";
  }
  myPage.style.display = "block";

  for (let i in btnArr) {
    btnArr[i].style.backgroundColor = "#674e4e";
    btnArr[i].style.color = "#ffffff";

    if (btnArr[i].getAttribute("id") == myBtn.getAttribute("id")) {
      status = i;
    }
  }
  myBtn.style.backgroundColor = "#faebd7";
  myBtn.style.color = "#674e4e";
}

function mouseOver() {
  this.style.backgroundColor = "#faebd7";
  this.style.color = "#674e4e";
}

function mouseOut(arr, s) {
  this.style.backgroundColor = "#674e4e";
  this.style.color = "#ffffff";
}

window.onload = function () {
  let homeBtn = document.getElementById("home_btn");
  let programBtn = document.getElementById("program_btn");
  let testBtn = document.getElementById("test_btn");
  let btnArr = [homeBtn, programBtn, testBtn];

  let homePage = document.getElementById("home");
  let programPage = document.getElementById("program");
  let pageArr = [homePage, programPage];

  for (let i in btnArr) {
    btnArr[i].addEventListener("mouseover", mouseOver);
    btnArr[i].addEventListener("mouseout", mouseOut);
  }
};

let status = 0;
