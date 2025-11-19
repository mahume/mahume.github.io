<script lang="ts">
	import { portfolioGroups } from '$lib/data/portfolio';
	import Lightbox from '$lib/components/Lightbox.svelte';

	let lightboxSrc = $state<string | null>(null);
	let lightboxAlt = $state('');

	function openLightbox(src: string, alt: string) {
		lightboxSrc = src;
		lightboxAlt = alt;
	}
</script>

<section id="work">
	<div class="card card-body bg-work rounded-0 border-0 py-3 text-white">
		<h2>App Portfolio</h2>
	</div>
	{#each portfolioGroups as group (group.id)}
		<div
			class="card card-body border-top-0 border-right border-bottom-0 border-left rounded-0 py-5"
		>
			<h3>{group.title}</h3>
			<div class="row no-gutters card-deck">
				{#each group.items as item (item.title)}
					<div class="card my-2">
						<button
							type="button"
							class="border-0 bg-transparent p-0"
							onclick={() => openLightbox(item.image, item.alt)}
							aria-label={`Open image ${item.alt}`}
						>
							<img class="card-img-top img-fluid" src={item.image} alt={item.alt} />
						</button>
						<div class="card-body">
							<h5 class="card-title">{item.title}</h5>
							<p class="card-text">{item.blurb}</p>
						</div>
						<hr class="m-0" />
						<div class="p-3"><p class="card-text text-center">{item.stack}</p></div>
						<hr class="m-0" />
						<div class="p-3">
							{#each item.links as link (link.href)}
								<div class="d-flex justify-content-between align-items-center pb-2">
									<span>{link.label}</span>
									<a
										href={link.href}
										class="card-link"
										target="_blank"
										rel="noopener noreferrer"
										aria-label={link.label}><i class={link.icon}></i></a
									>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>

<Lightbox bind:src={lightboxSrc} alt={lightboxAlt} />
