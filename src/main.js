/*
  버튼 onclick -> 
*/
function showPage(category) {
  currentCategory = category;
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
  }
  myBtn.style.backgroundColor = "#faebd7";
  myBtn.style.color = "#674e4e";
}

/*
  버튼 hover 기능 구현
*/
function addBtnEvent() {
  let homeBtn = document.getElementById("home_btn");
  let programBtn = document.getElementById("program_btn");
  let btnArr = [homeBtn, programBtn];

  for (let i in btnArr) {
    console.log(btnArr[i].id);
    btnArr[i].addEventListener("mouseover", mouseOver);
    //btnArr[i].addEventListener("mouseout", mouseOut);
    btnArr[i].addEventListener("mouseout", function () {
      if (btnArr[i]["id"] != currentCategory + "_btn") {
        this.style.backgroundColor = "#674e4e";
        this.style.color = "#ffffff";
      }
      //  this.style.backgroundColor = "#674e4e";
      //this.style.color = "#ffffff";
    });
  }
}

function mouseOver() {
  this.style.backgroundColor = "#faebd7";
  this.style.color = "#674e4e";
}

function mouseOut() {
  this.style.backgroundColor = "#674e4e";
  this.style.color = "#ffffff";
}

/*
  json 파일을 로드해서 addPaper 실행
*/
function loadFile(filePath) {
  let a;
  fetch(filePath)
    .then((response) => response.json())
    .then((data) => addPaper(data));
}

/*
  다운로드 item들을 html에 삽입
*/
function addPaper(data) {
  let parent = document.getElementById("paper_container");

  for (let file in data) {
    let temp = document.createElement("div");
    temp.setAttribute("class", "item");

    temp.innerHTML = `<p class="title"><a href="files/${file}" download>${
      file[0]
    }-${file.slice(1, file.lastIndexOf("."))})  ${data[file][0]}</a></p>
    <p>${data[file][1]}</p>`;

    parent.appendChild(temp);
  }
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

let data = loadFile("../files/index.json");
let currentCategory = "home";
window.onload = function () {
  addBtnEvent();
};
