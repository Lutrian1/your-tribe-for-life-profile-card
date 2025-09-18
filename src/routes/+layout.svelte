<script>
	import logo_icon from '$lib/assets/logo-icon.svg';
	import '$lib/css/global-styles.css';
	import { Background } from "$lib";
	import { Play } from "$lib";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo_icon} />
	<title>Classified</title>
</svelte:head>

<!-- COMPONENT: BACKGROUND--> 
<Play />

<main>
	{@render children?.()}
</main>

<!-- COMPONENT: BACKGROUND--> 
<Background />
