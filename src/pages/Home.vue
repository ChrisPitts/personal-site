<template>
	<section id="hero">
		<h1>Hero</h1>
	</section>
	<section id="about">
		<h2>About Me</h2>
		<p>
			My name is Chris Pitts. I am a front end web developer based in San
			Marcos, Texas. I have 10 years of programming experience and my goal is to
			make the web more accessible. I ensure that all websites I create are in
			compliant with the WCAG 2.1 Level AA standard.
		</p>
	</section>
	<section id="audits">
		<h2>Want a Free Accessibility Audit?</h2>
		<p>
			As part of my mission to make the web more accessible, I offer
			<span class="emphasized">FREE</span> accessibility audits.
		</p>
	</section>
	<section id="skills">
		<h2>Skills</h2>
		<div class="container">
			<figure class="card">
				<div class="card__content">
					<h3>HTML</h3>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
						alt="HTML"
					/>
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>CSS</h3>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
						alt="CSS"
					/>
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>SASS</h3>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
						alt="SASS"
					/>
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>Javascript</h3>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
						alt="javascript"
					/>
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>JQuery</h3>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
						alt="JQuery"
					/>
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>React</h3>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
						alt="react"
					/>
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>Vue</h3>
					<img src="../assets/vue.svg" alt="vue" />
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>Vite</h3>
					<img src="../assets/vite.svg" alt="vite" />
				</div>
			</figure>
		</div>
	</section>
	<section id="projects">
		<h2>Projects</h2>
		<div class="container">
			<RouterLink to="/smaa">
				<figcaption>San Marcos Abortion Activists</figcaption>
				<img src="../assets/smaa.png" />
			</RouterLink>
			<RouterLink to="/strikle">
				<figcaption>Strikle</figcaption>
				<img src="../assets/strikle.png" />
			</RouterLink>
		</div>
	</section>
	<section id="contact">
		<h2>Contact</h2>
		<form>
			<label for="name">Name</label>
			<input type="text" name="name" id="name" />
			<label for="email">Email</label>
			<input type="email" name="email" id="email" />
			<label for="message">Message</label>
			<textarea name="message" id="message" />
			<input type="submit" />
		</form>
	</section>
</template>

<style lang="scss" scoped>
#skills {
	.card {
		margin: 10px;
		width: 200px;

		&__content {
			background-color: black;
			border-radius: 8px;
			box-shadow: 0 0 10px 5px white;
			padding: 10px;
			transition: transform 2s ease, box-shadow 1s ease;
		}

		&:hover .card__content {
			box-shadow: 0 0 10px 5px red;
			transition: transform 0.1s ease;
		}

		img {
			width: 100%;
		}
	}
}

#projects {
	a {
		background-color: white;
		border: 5px solid white;
		max-width: 80%;
		padding: 0;
		position: relative;
		text-align: center;
		width: 500px;
	}

	img {
		aspect-ratio: 16/9;
		display: block;
		margin: 0;
		transition: opacity 500ms ease-in-out;
		width: 100%;
	}

	figcaption {
		color: black;
		left: 50%;
		opacity: 0;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		transition: opacity 500ms ease-in-out;
	}

	a:hover,
	a:focus {
		img {
			opacity: 0.3;
		}

		figcaption {
			opacity: 1;
		}
	}
}

#contact form {
	margin: auto;
	max-width: 800px;
	width: 90%;

	input,
	label,
	textarea {
		width: 100%;
	}
}
</style>

<script>
document.addEventListener('mousemove', (e) => {
	rotateCards(e);
});

function rotateCards(event) {
	const MAX_ANGLE = 25;

	//     Get mouse position
	let x = event.clientX;
	let y = event.clientY;
	// console.log(x,y);

	document.querySelectorAll('.card').forEach((element) => {
		let child = element.querySelector('.card__content');

		//         Handle mouse outside element
		let elementCoords = element.getBoundingClientRect();
		//         Booleans for if bouse is in the element bounds
		let elementIsInXBounds = elementCoords.left <= x && elementCoords.right > x;
		let elementIsInYBounds = elementCoords.top <= y && elementCoords.bottom > y;
		if (!(elementIsInXBounds && elementIsInYBounds)) {
			//              Set default state of element
			child.style.transform = `perspective(5000px) rotateX(0deg) rotateY(0deg)`;
			return;
		}

		//         Get dimensions of element
		let width = elementCoords.right - elementCoords.left;
		let height = elementCoords.bottom - elementCoords.top;

		//         Get center of element
		let middleX = elementCoords.left + width / 2;
		let middleY = elementCoords.top + height / 2;

		//         Set rotation angles
		let angleX = ((-1 * (y - middleY)) / (height / 2)) * MAX_ANGLE;
		let angleY = ((x - middleX) / (width / 2)) * MAX_ANGLE;

		//         Set transformation
		child.style.transform = `perspective(5000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
	});
}
</script>
