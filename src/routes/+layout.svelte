<script>
	import logo_icon from '$lib/assets/logo-icon.svg';
	import global_styles from '$lib/css/global-styles.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo_icon} />
</svelte:head>

{@render children?.()}
