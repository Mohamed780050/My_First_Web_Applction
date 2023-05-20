/////////////////////////////////////////// Target ///////////////////////////////////////////
let Targets = document.querySelectorAll(
  ".targets .target-row .details .progress .prog"
);
let increasingNumbers = document.querySelectorAll(
  ".targets .target-row .details .progress .prog span"
);
let TargetSection = document.querySelector(".targets");
let startCount = false;
console.log(increasingNumbers);
window.onscroll = function () {
  if (window.scrollY >= TargetSection.offsetTop) {
    if (!startCount) {
      Targets.forEach((targ) => {
        let goal = targ.dataset.goal;
        let numberToStart = 1;
        let counter = setInterval(() => {
          targ.style.width = `${numberToStart++}%`;
          if (targ.style.width == goal) {
            clearInterval(counter);
          }
        }, 20);
      });
      increasingNumbers.forEach((num) => {
        let goal = num.dataset.the;
        let NTS = 1;
        let counter = setInterval(() => {
          num.textContent = `${NTS++}%`;
          if (num.textContent == goal) {
            clearInterval(counter);
          }
        }, 20);
      });
    }
    startCount = true;
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// Tasks ///////////////////////////////////////////
let Tasks = document.querySelectorAll(".tasks .task");
let transh = document.querySelectorAll(".tasks .task i");
let btnToDelete = document.querySelector(".tasks .head button");
btnToDelete.onclick = function () {
  Tasks.forEach((task) => {
    task.classList.remove("done");
    task.classList.add("done");
  });
};
transh.forEach((Tbtn) => {
  Tbtn.onclick = function () {
    this.parentElement.classList.remove("done");
    this.parentElement.classList.add("done");
  };
});
