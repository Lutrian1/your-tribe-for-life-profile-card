<h1>
    <span class="pent-up-rage-D">D</span>
    <span class="acknowledgement-A">A</span>
    <span class="daily-magazine-ILY">ILY</span>
    <span class="bulletin-gothic-K">K</span>
    <span class="delicious-handrawn-A">A</span>
    <span class="daily-magazine-NUS">NUS</span>
</h1>

<style>

/* ---------------------------------------- Styling per letter en de bijbehorende font ---------------------------------------- */

.pent-up-rage-D{
    font-family: Pent-Up-Rage, Georgia, Times, 'Times New Roman', serif;
}

.acknowledgement-A{
    font-family: Acknowledgement, Georgia, Times, 'Times New Roman', serif;
}

.daily-magazine-ILY, .daily-magazine-NUS{
    font-family: Daily-Magazine-Medium, Georgia, Times, 'Times New Roman', serif;
    letter-spacing: 3px;
}

.bulletin-gothic-K{
    font-family: Bulletin-Gothic, Georgia, Times, 'Times New Roman', serif;
}

.delicious-handrawn-A{
    font-family: Delicious-Handrawn, Georgia, Times, 'Times New Roman', serif;
}

.pent-up-rage-D, .bulletin-gothic-K{
    color: var(--secondary-color);
}

.acknowledgement-A, .daily-magazine-ILY, .delicious-handrawn-A, .daily-magazine-NUS{
    color: var(--main-color);
}

@supports (font-size: clamp(4rem, 10vw, 8rem)) {
    .pent-up-rage-D, .bulletin-gothic-K{
        font-size: clamp(4rem, 10vw, 8rem);
    }
}

@supports (font-size: clamp(2.2rem, 4rem, 6rem)) {
    .acknowledgement-A, .daily-magazine-ILY, .delicious-handrawn-A, .daily-magazine-NUS{
        font-size: clamp(2.2rem, 10vw, 6rem);
    }
}

h1{
    letter-spacing: -1px;
    -webkit-text-stroke-color: var(--main-color);
    -webkit-text-stroke-width: 1px;
    margin: 0;
    text-align: center;
    position: relative;
    z-index: 1;
}

</style>
