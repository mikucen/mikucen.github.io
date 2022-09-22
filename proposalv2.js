const comeback = document.getElementById("btn2");
const yes = document.getElementById("btn1");

const noBtn = document.getElementById("btn2")
const yesBtn = document.getElementById("btn1")
const question = document.getElementById("question")
noBtn.addEventListener("click", ()=>{
    let rand=Math.floor(Math.random(1) * (500 -100)+1);
    let rand2=Math.floor(Math.random(1) * (-300-100)+1);
    noBtn.style.transform = "translate("+rand+"px,"+rand2+"px)";
});
    yesBtn.addEventListener("click", ()=>{
        question.innerHTML = "I love you too"
    })