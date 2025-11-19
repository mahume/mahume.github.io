<script lang="ts">
	import { skillCategories } from '$lib/data/skills';
</script>

<section id="home">
	<div class="card card-body bg-home rounded-0 border-0 py-3 text-white">
		<h2>About Me &amp; Skills</h2>
	</div>
	<div class="card card-body border-top-0 border-right border-bottom-0 border-left rounded-0 py-5">
		<h3>About Me</h3>
		<p class="lead">
			I'm a Full-Stack Developer instilled with a strong work ethic that values clear communication
			and effective teamwork.
		</p>
		<p class="lead">
			Learning has always been my passion. Whether playing music, speaking a foreign language, or
			building an application from the ground up, I'm always seeking to expand my knowledge.
		</p>
		<p class="lead">
			After spending five years abroad teaching English and immersing myself in different cultures,
			I returned to the U.S. ready to apply that same dedication to software development. Now I
			channel my problem-solving mindset and collaborative spirit into creating clean, functional
			code.
		</p>
	</div>
	<div
		class="card card-body border-top-0 border-right border-bottom-0 border-left rounded-0 pt-2 pb-5"
	>
		<h3>My Skills</h3>
		<p>Click on any of the categories below to expand and see what I've been focusing on.</p>
		<div class="accordion" role="tablist">
			{#each skillCategories as cat (cat.id)}
				<details class="card mb-2" open={cat.id === 'client'}>
					<summary class="card-header" id={`heading-${cat.id}`}
						><h2 class="mb-0">{cat.title}</h2></summary
					>
					<div class="card-body">
						<div class="d-flex justify-content-around flex-row flex-wrap">
							{#each cat.items as item (item.label)}
								<div class="col-sm-6 col-md-4 col-lg-3 my-1 text-center">
									<i class={`${item.icon} fa-3x mb-2`}></i>
									<h5 class="text-center">{item.label}</h5>
								</div>
							{/each}
						</div>
					</div>
				</details>
			{/each}
		</div>
	</div>
</section>
