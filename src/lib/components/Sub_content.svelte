<script>
    const { luukInfo } = $props()
</script>

<section>
    <h5>Classified</h5>
    <p>{ luukInfo.name }</p>
</section>

<style>

    section{
        display: none;
        @media (min-width: 380px) and (min-height: 700px){
            display: block;
        }
    }

    h5{
        font-family: Top-Secret, Georgia, Times, 'Times New Roman', serif; 
        margin: 2vh;
        text-align: center;
        transform: rotate(-6deg);
        color: var(--secondary-color);
    }

    @supports (font-size: clamp(4rem, 10vw, 8rem)) {
        h5{
            font-size: clamp(2.5rem, 10vw, 8rem);
        }
    }

</style>