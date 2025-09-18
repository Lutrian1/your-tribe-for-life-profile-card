<script>
	import logo_icon from '$lib/assets/logo-icon.svg';
	import '$lib/css/global-styles.css';
	import { Background } from "$lib";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo_icon} />
</svelte:head>

<main>
	{@render children?.()}
</main>

<!-- COMPONENT: BACKGROUND--> 
<Background />
