const mainContainerEl = document.querySelector(".main-container");

for (let i = 0; i < 50; i++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("colors");
    mainContainerEl.appendChild(colorContainerEl);
}

const allColorContainers = document.querySelectorAll(".colors");

colorGenerate();

function colorGenerate(){
    allColorContainers.forEach((colorContainerEl)=>{
        const newColorCode = createRandomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
}

function createRandomColor(){
    const characters = "0123456789abcdef";
    const colorCodeLengh = 6;
    let colorCode = "";
    for(let i = 0; i < colorCodeLengh; i++){
        const randomNumber = Math.floor(Math.random() * characters.length);
        colorCode += characters.substring(randomNumber, randomNumber + 1);
        
    }
    return colorCode;
}