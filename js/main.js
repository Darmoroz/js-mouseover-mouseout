const refs = {
	inner: document.querySelector(".inner"),
};
const BLOCKS = 5000;
const squareRefs = [];

for (let i = 0; i < BLOCKS; i += 1) {
	const square = document.createElement("div");
	square.className = "square";
	square.addEventListener("mouseenter", setColor);
	// square.addEventListener("mouseleave", removeColor);
	squareRefs.push(square);
}
refs.inner.append(...squareRefs);
refs.square = document.querySelector(".square");

// square.addEventListener("mouseout", () => removeColor(square));

function setColor(e) {
	const color = getRandomHexColor();
	console.log(color);
	e.currentTarget.style.background = color;
	e.currentTarget.style.boxShadow = `0 0 12px ${color}`;
}

function removeColor(e) {
	e.currentTarget.style.background = "#2d2d2d";
	e.currentTarget.style.boxShadow = "0 0 4px #000";
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
