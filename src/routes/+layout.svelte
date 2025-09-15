<script>
	import logo_icon from '$lib/assets/logo-icon.svg';
	import '$lib/css/global-styles.css';
	import { Header } from "$lib";
	import { Background } from "$lib";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo_icon} />
</svelte:head>

<!-- COMPONENT: HEADER--> 
<Header />

<main>
	{@render children?.()}
</main>

<!-- COMPONENT: BACKGROUND--> 
<Background />

