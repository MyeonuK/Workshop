function showPage(category) {
  let myPage = document.getElementById(category);
  let myBtn = document.getElementById(category + "_btn");

  /*
  let homeBtn = document.getElementById("home_btn");
  let programBtn = document.getElementById("program_btn");
  let btnArr = [homeBtn, programBtn];
*/
  let homePage = document.getElementById("home");
  let programPage = document.getElementById("program");
  let pageArr = [homePage, programPage];

  for (let i in pageArr) {
    pageArr[i].style.display = "none";
  }
  myPage.style.display = "block";
  /*
  for (let i in btnArr) {
    btnArr[i].style.backgroundColor = "#674e4e";
    btnArr[i].style.color = "#ffffff";

    if (btnArr[i].getAttribute("id") == myBtn.getAttribute("id")) {
      status = i;
    }
  }
  */
  myBtn.style.backgroundColor = "#faebd7";
  myBtn.style.color = "#674e4e";
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

function addBtnEvent() {
  let homeBtn = document.getElementById("home_btn");
  let programBtn = document.getElementById("program_btn");
  let btnArr = [homeBtn, programBtn];
  /*
  let homePage = document.getElementById("home");
  let programPage = document.getElementById("program");
  let pageArr = [homePage, programPage];

*/
  for (let i in btnArr) {
    btnArr[i].addEventListener("mouseover", mouseOver);
    btnArr[i].addEventListener("mouseout", mouseOut);
  }
}

function mouseOver() {
  this.style.backgroundColor = "#faebd7";
  this.style.color = "#674e4e";
}

function mouseOut(arr, s) {
  this.style.backgroundColor = "#674e4e";
  this.style.color = "#ffffff";
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

/*
function loadFile(filePath) {
  let a;
  fetch(filePath)
    .then((response) => response.json())
    .then((data) => addPaper(data));
}

function addPaper(data) {
  let parent = document.getElementById("paper_container");
  console.log(parent);

  for (let file in data) {
    let temp = document.createElement("div");
    temp.setAttribute("class", "item");

    temp.innerHTML = `<p class="title"><a href="${file}" download>${data[file][0]}</a></p>
    <p>${data[file][1]}</p>`;

    parent.appendChild(temp);
  }
}

let data = loadFile("../files/index.json");
*/

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/*
function addPaper(data) {
  let parent = document.getElementById("paper_container");

  for (let file in data) {
    let temp = document.createElement("div");
    temp.setAttribute("class", "item");

    temp.innerHTML = `<p class="title"><a href="/files/'${file}" download>${data[file][0]}</a></p>
    <p>${data[file][1]}</p>`;

    parent.appendChild(temp);
  }
}

*/

window.onload = function () {
  addBtnEvent();
  //addPaper(data);
};
