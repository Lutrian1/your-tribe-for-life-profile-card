<script>
	import logo_icon from '$lib/assets/logo-icon.svg';
	import '$lib/css/global-styles.css';
	import { Background } from "$lib";
	import { Hint_Text } from "$lib";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo_icon} />
	<title>The Daily Kanus</title>
</svelte:head>

<Hint_Text />

<main>
	{@render children?.()}
</main>

<!-- COMPONENT: BACKGROUND--> 
<Background />
