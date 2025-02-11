const character = document.getElementById("character");
let posX = 230, posY = 230;
const speed = 10;

document.addEventListener("keydown", (event) => {
	switch (event.key) {
		case "ArrowUp":
			posY = Math.max(0, posY - speed);
			break;
		case "ArrowDown":
			posY = Math.min(460, posY + speed);
			break;
		case "ArrowLeft":
			posX = Math.max(0, posX - speed);
			break;
		case "ArrowRight":
			posX = Math.min(460, posX + speed);
			break;
	}
	character.style.top = posY + "px";
	character.style.left = posX + "px";
});
