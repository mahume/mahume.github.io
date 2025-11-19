<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Mike Hume - Portfolio</title>

	<!-- Google Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,700" rel="stylesheet" />

	<!-- Font Awesome -->
	<link
		rel="stylesheet"
		href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
		integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
		crossorigin="anonymous"
	/>

	<!-- Font MFizz -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.css"
	/>

	<!-- Bootstrap CSS -->
	<link
		rel="stylesheet"
		href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="container">
	<!-- Header -->
	<header id="main-header" class="mb-4">
		<div class="row no-gutters">
			<div class="col-md-6 col-lg-4">
				<img src="/images/profile.jpeg" alt="Mike Hume" />
			</div>
			<div class="col-md-6 col-lg-8">
				<div class="d-flex flex-column">
					<div class="bg-main px-4 pt-4 pb-0 text-white">
						<div class="d-flex justify-content-center align-items-center flex-row">
							<h1 class="display-4">Mike Hume</h1>
						</div>
					</div>
					<div class="bg-main p-4 text-white">
						<div class="d-flex justify-content-around align-items-center flex-row">
							<a
								href="https://instagram.com/m.a.hume/"
								target="_blank"
								class="text-white"
								aria-label="Instagram"><i class="fab fa-instagram fa-2x"></i></a
							>
							<a
								href="https://www.linkedin.com/in/mahume"
								target="_blank"
								class="text-white"
								aria-label="LinkedIn"><i class="fab fa-linkedin fa-2x"></i></a
							>
							<a
								href="https://github.com/mahume"
								target="_blank"
								class="text-white"
								aria-label="GitHub"><i class="fab fa-github fa-2x"></i></a
							>
						</div>
					</div>
					<div class="bg-dark p-4 text-center text-white">
						<h5>Full Stack Web Developer</h5>
					</div>
					<!-- Tabs -->
					<nav class="d-flex flex-row text-center text-white" aria-label="Main sections">
						<a
							href="/"
							class="port-item bg-home border-0 p-4"
							class:active={$page.url.pathname === '/'}
							aria-current={$page.url.pathname === '/' ? 'page' : undefined}
						>
							<i class="fas fa-home fa-2x d-block" aria-hidden="true"></i>
							<h3 class="d-none d-lg-block mt-2">Home</h3>
						</a>
						<a
							href="/resume"
							class="port-item bg-resume border-0 p-4"
							class:active={$page.url.pathname === '/resume'}
							aria-current={$page.url.pathname === '/resume' ? 'page' : undefined}
						>
							<i class="fas fa-graduation-cap fa-2x d-block" aria-hidden="true"></i>
							<h3 class="d-none d-lg-block mt-2">Resume</h3>
						</a>
						<a
							href="/work"
							class="port-item bg-work border-0 p-4"
							class:active={$page.url.pathname === '/work'}
							aria-current={$page.url.pathname === '/work' ? 'page' : undefined}
						>
							<i class="fas fa-briefcase fa-2x d-block" aria-hidden="true"></i>
							<h3 class="d-none d-lg-block mt-2">Apps</h3>
						</a>
						<a
							href="/contact"
							class="port-item bg-contact border-0 p-4"
							class:active={$page.url.pathname === '/contact'}
							aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
						>
							<i class="fas fa-envelope fa-2x d-block" aria-hidden="true"></i>
							<h3 class="d-none d-lg-block mt-2">Contact</h3>
						</a>
					</nav>
				</div>
			</div>
		</div>
	</header>

	<!-- Page content -->
	{@render children()}

	<!-- Footer -->
	<footer id="main-footer" class="bg-dark mt-4 p-5 text-white">
		<div class="row">
			<div class="col-md-6">
				<a href="#" class="btn btn-outline-light"
					><i class="fas fa-file-download mr-2"></i><span>Download Resume</span></a
				>
			</div>
		</div>
	</footer>
</div>

<style>
	.port-item {
		background: transparent;
		text-decoration: none;
		display: block;
		flex: 1;
	}
	.port-item.active {
		outline: 2px solid #fff;
	}
	.port-item:hover {
		opacity: 0.8;
	}
</style>
