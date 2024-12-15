let checkBox = [...document.querySelectorAll(".custom-checkbox")];
let inputBox = [...document.querySelectorAll(".input")];
let attachableBox = document.querySelector(".attachable-box");
let goalsBox = [...document.querySelectorAll(".goals-box")];
let error = document.querySelector(".error");
let progressValue = document.querySelector(".progress-value");
let progressCount = document.querySelector(".progressCount");
let remove = [...document.querySelectorAll(".remove")];
let addButton = document.querySelector(".add-button");

let count = 0;

addButton.addEventListener("click", () => {
  let clone = goalsBox[0].cloneNode(true);
  clone.childNodes.item(3).value=""
  clone.classList.remove("completed")
  attachableBox.appendChild(clone);

  checkBox = [...document.querySelectorAll(".custom-checkbox")];
  inputBox = [...document.querySelectorAll(".input")];
  goalsBox = [...document.querySelectorAll(".goals-box")];
  remove = [...document.querySelectorAll(".remove")];
  checkingBox();
  checkingBox2();
});

function checkingBox2() {
  checkBox.forEach((e, i) => {
    inputBox[i].addEventListener("focus", (e) => {
      error.style.display = "none";
    });
    inputBox[i].addEventListener("keyup", (e) => {
      console.log(e.target.value);
    });

    e.addEventListener("click", function () {
      if (
        inputBox.every((w) => {
          return w.value == "";
        })
      ) {
        console.log("it is blank");
        error.style.display = "block";
      } else {
        console.log("it is not blank");
        goalsBox[i].classList.toggle("completed");
      }
    });
  });
}

function checkingBox() {
  checkBox.forEach((e) => {
    e.addEventListener("click", () => {
      let completed = document.querySelectorAll(".completed");
      count = completed.length;
      console.log(count);
      progressValue.style.width = (count / inputBox.length) * 100 + "%";
      progressCount.innerText = `${count}/${inputBox.length} completed`;
    });

    remove.forEach((rm) => {
      rm.addEventListener("click", (el) => {
        console.log(el.target.parentElement);
        el.target.parentElement.remove();
        checkBox = [...document.querySelectorAll(".custom-checkbox")];
        inputBox = [...document.querySelectorAll(".input")];
        goalsBox = [...document.querySelectorAll(".goals-box")];
        remove = [...document.querySelectorAll(".remove")];
      });
    });
  });
}

checkingBox2();
checkingBox();