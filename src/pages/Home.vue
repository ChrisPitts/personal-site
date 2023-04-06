<template>
	<section id="hero">
		<h1>Hero</h1>
	</section>
	<section id="about">
		<h2>About Me</h2>
		<p>
			My name is Chris Pitts. I am a front end web developer based in San
			Marcos, Texas. I have 10 years of programming experience and my goal is to make the web more accessible
		</p>
	</section>
	<section id="audits">
		<h2>Want a Free Accessibility Audit?</h2>
		<p></p>
	</section>
	<section id="skills">
		<h2>Skills</h2>
		<div class="container">
			<figure class="card">
				<div class="card__content">
					<h3>HTML</h3>
					<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
					/>
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>CSS</h3>
                	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
				</div>
				
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>SASS</h3>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>Javascript</h3>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>JQuery</h3>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>React</h3>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>Vue</h3>
					<img src="../assets/vue.svg" />
				</div>
			</figure>
			<figure class="card">
				<div class="card__content">
					<h3>Vite</h3>
					<img src='../assets/vite.svg' />
				</div>
			</figure>
		</div>
	</section>
	<section id="projects">
		<h2>Projects</h2>
		<div class="container">
			<figure>
                <h3>San Marcos Abortion Activists</h3>
            </figure>
            <figure>
                <h3>Strikle</h3>
            </figure>
            <figure>
                <h3>Island Irrigation</h3>
            </figure>
		</div>
	</section>
	<section id="contact">
		<h2>Contact</h2>
		<form>
			<label for='name'>Name</label>
			<input type="text" name="name" id="name" />
			<label for='email'>Email</label>
			<input type="email" name="email" id="email" />
			<label for='message'>Message</label>
			<textarea name="message" id="message" />
			<input type='submit' />
		</form>
	</section>
</template>

<style lang="scss" scoped>

    #skills{
        
		.card{

			width: 200px;
			margin: 10px;

			&__content{
				background-color: black;
				box-shadow: 0 0 10px 5px white;
				border-radius: 8px;
				padding: 10px;
				transition: transform 2s ease;

				
			}

			&:hover .card__content{
				
				box-shadow: 0 0 10px 5px red;
				transition: transform 0.1s ease;
			}

			img{
				width: 100%;
			}

		}
    }

	#contact form{

		width: 90%;
		max-width: 800px;
		margin: auto;

		input, label, textarea{
			width: 100%;
		}
	}
</style>

<script>
document.addEventListener("mousemove", e=>{
	rotateCards(e);
})

function rotateCards(event) {
    const MAX_ANGLE = 25;

    //     Get mouse position
    let x = event.clientX;
    let y = event.clientY;
    // console.log(x,y);

    document.querySelectorAll(".card").forEach((element) => {
        let child = element.querySelector(".card__content");

        //         Handle mouse outside element
        let elementCoords = element.getBoundingClientRect();
        //         Booleans for if bouse is in the element bounds
        let elementIsInXBounds =
            elementCoords.left <= x && elementCoords.right > x;
        let elementIsInYBounds =
            elementCoords.top <= y && elementCoords.bottom > y;
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