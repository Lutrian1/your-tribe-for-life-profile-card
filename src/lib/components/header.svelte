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
        max-width: calc(850px + 3vw + 25px); /* 850px MAX + De padding van de main_content: Section + 25px van de padding in .logo-section*/
        @media (min-width: 850px) {
            margin: 0 0 0 1vw;
        }
    }

    .header-bg{
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: calc(850px + 3vw + 25px);
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