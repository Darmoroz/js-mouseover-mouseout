const refs = {
	inner: document.querySelector(".inner"),
};
const BLOCKS = 4000;
const squareRefs = [];

for (let i = 0; i < BLOCKS; i += 1) {
	const square = document.createElement("div");
	square.className = "square";
	// square.addEventListener("mouseenter", setColor);
	// square.addEventListener("touchstart", setColor);
	// square.addEventListener("touchmove", setColor);
	// square.addEventListener("mouseleave", removeColor);
	squareRefs.push(square);
}
refs.inner.append(...squareRefs);
refs.square = document.querySelectorAll(".square");

refs.inner.addEventListener("mouseover", setColor);
refs.inner.addEventListener("touchmove", setColor);

function setColor(e) {
	const color = getRandomHexColor();
	if (e.target !== e.currentTarget) {
		e.target.style.background = color;
		e.target.style.boxShadow = `0 0 12px ${color}`;
	}
}

function removeColor(e) {
	if (e.target !== e.currentTarget) {
		e.target.style.background = "#2d2d2d";
		e.target.style.boxShadow = "0 0 4px #000";
	}
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
