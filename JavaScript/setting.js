/////////////////////////////////////////// Radio ///////////////////////////////////////////
let rads = document.querySelectorAll(".backup-control .servers .server");
rads.forEach((el) => {
  el.onclick = function () {
    rads.forEach((el) => {
      el.style.borderColor = "#eee";
      el.style.color = "black";
      this.style.borderColor = "var(--blue-color)";
      this.style.color = "var(--blue-color)";
    });
  };
});
