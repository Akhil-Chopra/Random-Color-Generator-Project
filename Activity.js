let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.log("Generate a random color");
// });

function getRandom(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);

    let color = `rgb(${red},${blue},${green})`;
    return color;
}

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandom();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color Updated");
})