<script>
    import { Logo } from "$lib";
    import { Line } from "$lib";
    import Header_Background from '$lib/assets/header-background.avif';
</script>

<header>
    <img src="{Header_Background}" alt="" class="header-bg">
    <section class="logo-section">
        <p class="made-by">Made By <strong class="strong-with-bg">THE</strong> Luuk Tol</p>
        <Line className = "line-1"/>
        <Logo />
        <Line className = "line-2"/>
    </section>
</header>

<style>

:root{
--line-1: 18px;
}

header{
    position: relative;
    max-width: 850px;
}

.header-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 850px;
}

.strong-with-bg{
    background-color: var(--background-color);
    font-size: 1.4rem;
}

.logo-section{
    padding: 10px 25px 0 25px;
}

.made-by{
    margin: 0;
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 14px;
    transform: translateY(calc(-11px + var(--line-1)));
    z-index: 1;
}

</style>