var isSpawning = true;
var spawnIntervals = [];

document.addEventListener("DOMContentLoaded", function () {
	startSpawningBubbles();
});

document.getElementById("bubbleButton").addEventListener("click", function () {
	isSpawning = !isSpawning;

	if (isSpawning) {
		this.innerHTML = "&#10074;&#10074;";
		startSpawningBubbles();
	} else {
		this.innerHTML = "&#9658;";
		stopSpawningBubbles();
	}
});

function spawnBubble() {
	var bubble = document.createElement("div");
	bubble.classList.add("bubble");

	var size = Math.random() * (20 - 10) + 10;
	bubble.style.width = `${size}px`;
	bubble.style.height = `${size}px`;

	var colorClass = "bubble-color-" + (Math.floor(Math.random() * 5) + 1);
	bubble.classList.add(colorClass);

	bubble.style.setProperty(
		"--randX",
		`${Math.random() * window.innerWidth - window.innerWidth / 2}px`
	);
	bubble.style.setProperty("--scaleEnd", `${Math.random() * (1.2 - 0.8) + 0.8}`);

	var button = document.getElementById("bubbleButton");
	var btnRect = button.getBoundingClientRect();

	bubble.style.left = `${btnRect.left + btnRect.width / 2 - size / 2}px`;
	bubble.style.bottom = `80px`;

	document.body.appendChild(bubble);
	bubble.style.animation = `bubbleMove 3s linear forwards`;

	setTimeout(function () {
		bubble.remove();
	}, 3000);
}

function startSpawningBubbles() {
	for (let i = 0; i < 3; i++) {
		let interval = setInterval(spawnBubble, 100);
		spawnIntervals.push(interval);
	}
}

function stopSpawningBubbles() {
	spawnIntervals.forEach(clearInterval);
	spawnIntervals = [];
}
