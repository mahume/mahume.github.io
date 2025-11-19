<script lang="ts">
	let { src = $bindable(), alt = '' } = $props<{ src: string | null; alt?: string }>();

	function close() {
		src = null;
	}

	function onKey(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}
</script>

{#if src}
	<div
		class="position-fixed fixed-top d-flex justify-content-center align-items-center bg-dark h-100 w-100"
		style="background: rgba(0,0,0,0.85); z-index: 9999;"
		onclick={close}
		onkeydown={onKey}
		role="button"
		tabindex="0"
	>
		<img {src} {alt} style="max-height:90vh; max-width:90vw; object-fit:contain;" />
		<button
			type="button"
			class="btn btn-light position-absolute"
			style="top:1rem; right:1rem"
			onclick={(e) => {
				e.stopPropagation();
				close();
			}}
			aria-label="Close lightbox">&times;</button
		>
	</div>
{/if}
