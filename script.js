// written with self knowledge

let checkBox = document.querySelectorAll(".custom-checkbox");
let goalsBox = document.querySelectorAll(".goals-box");
let progressCount = document.querySelector(".progressCount");
let progressValue = document.querySelector(".progress-value");

// checkBox.addEventListener('click',()=>{
//     if(goalsBox.classList.contains('completed')){
//         goalsBox.classList.remove('completed');
//     }else{
//         goalsBox.classList.add('completed')
//     }

// })

// let arr = [...goalsBox]
// arr.forEach((e,i)=>{
//     e.classList.contains('completed')
// })

let count = 0;

for (let i = 0; i < checkBox.length; i++) {
  checkBox[i].addEventListener("click", (e) => {
    if (goalsBox[i].classList.contains("completed")) {
      goalsBox[i].classList.remove("completed");
      count--;
    } else {
      goalsBox[i].classList.add("completed");
      count++;
    }

    progressValue.style.width = `${(count / goalsBox.length) * 100}%`;
    progressCount.textContent = `${count} / ${goalsBox.length} completed`;
  });
}
