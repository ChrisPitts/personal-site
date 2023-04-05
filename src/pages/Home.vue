<template>
	<section id="hero">
		<h1>Hero</h1>
	</section>
	<section id="about">
		<h2>About Me</h2>
		<p>
			My name is Chris Pitts. I am a front end web developer based in San
			Marcos, Texas. I have 10 years of programming experience and specialize in
			web accessibility
		</p>
	</section>
	<section id="skills">
		<h2>Skills</h2>
		<div class="container">
			<article>
				<h3>HTML</h3>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
				/>
			</article>
			<article>
				<h3>CSS</h3>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
			</article>
			<article>
				<h3>SASS</h3>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
			</article>
			<article>
				<h3>Javascript</h3>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
			</article>
			<article>
				<h3>JQuery</h3>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
			</article>
			<article>
				<h3>React</h3>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
			</article>
			<article>
				<h3>Vue</h3>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
			</article>
			<article>
				<h3>Vite</h3>
                <img src='../assets/vite.svg' />
			</article>
		</div>
	</section>
	<section id="projects">
		<h2>Projects</h2>
		<div class="container">
			<article>
                <h3>San Marcos Abortion Activists</h3>
            </article>
            <article>
                <h3>Strikle</h3>
            </article>
            <article>
                <h3>Island Irrigation</h3>
            </article>
		</div>
	</section>
	<section id="contact">
		<h2>Contact</h2>
	</section>
</template>

<style lang="scss">

    #skills img
    {
        width: 150px;
    }
</style>