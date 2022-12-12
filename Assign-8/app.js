const btnEl = document.getElementById("btn");
const questionEl = document.getElementById("question");
const score = document.getElementById("score");
const inputEl = document.getElementById("input");
 
let num1 = 0;
let num2 = 0;
let Score = 0;
btnEl.click()       
genrateQuestion();
btnEl.addEventListener("click", () => {
    const answer = num1 * num2;
    if (inputEl.value == answer) {
        Score++;
        score.textContent = "Score:" + Score;
        inputEl.value = "";
        genrateQuestion();
    }
    else {
        Score--;
        audio.play();
        score.textContent = "Score:" + Score;
        inputEl.value = "";
        genrateQuestion();
    }
});

function genrateQuestion() {
    num1 = Math.ceil(Math.random() * 20);
    num2 = Math.ceil(Math.random() * 10);
    questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
}
