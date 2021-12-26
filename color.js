const colors = ["red", "orange", "yellow", "green", "salmon", "violet", "navy"];

// const container = document.querySelector("#boxes");

// for (let color of colors) {
// 	const box = document.createElement("div");
// 	const body = document.body;
// 	box.style.backgroundColor = color;
// 	box.classList.add("box");
// 	container.appendChild(box);
// 	box.addEventListener("click", function () {
// 		console.log(box.style.backgroundColor);
// 		document.body.style.backgroundColor = box.style.backgroundColor;
// 	});
// }

const printColor = function () {
	document.body.style.backgroundColor = this.style.backgroundColor;
};
const container = document.querySelector("#boxes");

for (let color of colors) {
	const box = document.createElement("div");
	box.style.backgroundColor = color;

	box.classList.add("box");
	container.appendChild(box);
	box.addEventListener("click", printColor);
}

const input = document.querySelector("#username");

input.addEventListener("keydown", function () {
	console.log("keydown");
});

input.addEventListener("keyup", function () {
	console.log("keyup");
});

input.addEventListener("keypress", function () {
	console.log("keypress");
});
