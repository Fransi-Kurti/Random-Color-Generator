const mainContainerEl = document.querySelector(".main-container");

for (let i = 0; i < 50; i++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("colors");
    mainContainerEl.appendChild(colorContainerEl);
    
}