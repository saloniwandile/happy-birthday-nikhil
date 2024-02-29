// confetti.js
var defaults = {
  scalar: 2,
  spread: 270,
  particleCount: 25,
  origin: { y: 0.4 },
  startVelocity: 35,
};

function runConfetti1() {
	confetti({
	  ...defaults,
	  shapes: ["circle"],
	  shapeOptions: {
		circle: {
		  replaceColor: false,
		  radius: 50, // Adjust the size of the emoji
		  emoji: "🎂", // Emoji for cake
		},
	  },
	  colors: ["#ff9a00", "#ff7400", "#ff4d00"],
	});
  }

  function runConfetti2() {
	confetti({
	  ...defaults,
	  shapes: ["circle"],
	  shapeOptions: {
		circle: {
		  replaceColor: false,
		  radius: 50, // Adjust the size of the emoji
		  emoji: "🎈", // Emoji for balloon
		},
	  },
	  colors: ["#8d960f", "#be0f10", "#445404"],
	});
  }
  

  function runConfetti3() {
	confetti({
	  ...defaults,
	  shapes: ["circle"],
	  shapeOptions: {
		circle: {
		  replaceColor: false,
		  radius: 50, // Adjust the size of the emoji
		  emoji: "❤️", // Emoji for heart
		},
	  },
	  colors: ["#f93963", "#a10864", "#ee0b93"],
	});
  }
