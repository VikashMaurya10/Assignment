const hrs = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const secondes = document.querySelector("#secondes");

window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    let date = new Date();
    hrs.textContent = date.getHours();
    minutes.innerText = date.getMinutes();
    secondes.textContent = date.getSeconds();
  }, 1000);
});
// let Currrent_hrs = date.getHours()
// var Currrent_minutes = date.getMinutes()
// var Currrent_seconds = date.getSeconds()
