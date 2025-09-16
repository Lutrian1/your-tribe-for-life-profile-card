<script>
    import { BlueskySVG } from '$lib';
    import { GithubLogo } from '$lib';
    import { InstagramSVG } from '$lib';
    import { Line } from "$lib";

    import video from '$lib/assets/prison-vid.webm';
</script>

    <section>

        <article>

            <h2>luuk<br class="responsive-br"/> tol<br class="responsive-br"/> is<br class="responsive-br"/><span class="span-with-bg-black"> <br class="responsive-br-big-screen"/>terug</span></h2>
            <h3>OOK VOOR JAAR TWEE HEEFT HIJ WEER EEN VISITEKAARTJE GEMAAKT</h3>

        </article>

        <aside>

            <div class="video-content">

                <video width="200" height="100" autoplay="autoplay" class="prison-vid" loop>
                    <track default kind="captions" srclang="nl" />
                    <source src="{video}" type="video/webm" />
                </video>

            </div>

            <p class="non-read-text" aria-hidden="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut scelerisque felis. Duis consectetur, 
                nisl ut ornare ultricies, lectus arcu mattis quam, eget sodales neque odio sed orci. Nam placerat lacus nec leo vehicula lacinia. 
                Ut ut tortor sed metus bibendum rhoncus. Ut laoreet viverra justo, in congue est vulputate vel. Cras euismod tempor risus, 
                sit amet porttitor quam facilisis vel. Duis eu turpis nisl. Fusce dolor erat, tincidunt in sapien eu, placerat mattis augue. 
                In eu tempor odio. Mauris vitae neque eleifend, volutpat est eu, convallis metus. Quisque eleifend nibh sed enim sollicitudin iaculis. 
                In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut scelerisque felis. 
                Duis consectetur, nis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                nisl ut ornare ultricies. </p>

            <h4>Check me Github Hieronder</h4>

                <p class="non-read-text" aria-hidden="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut scelerisque felis. Duis consectetur, 
                nisl ut ornare ultricies, lectus arcu mattis quam, eget sodales neque odio sed orci. Nam placerat lacus nec leo vehicula lacinia. 
                Ut ut tortor sed metus bibendum rhoncus. Ut laoreet viverra justo, in congue est vulputate vel. Cras euismod tempor risus, 
                sit amet porttitor quam facilisis vel. Duis eu turpis nisl. Fusce dolor erat, tincidunt in sapien eu, placerat mattis augue. 
                In eu tempor odio. Mauris vitae neque eleifend, volutpat est eu, convallis metus. Quisque eleifend nibh sed enim sollicitudin iaculis. 
                In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut scelerisque felis. 
                Duis consectetur, nis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                nisl ut ornare ultricies. </p>

        </aside>

        <div class="links">
            <InstagramSVG />
            <GithubLogo />
            <BlueskySVG />
        </div>

        <Line className = "line-3"/>

        <footer>

            <p>Mijn naam is Luuk Tol en ik ben momenteel FDND-student aan de Hogeschool van Amsterdam</p>
            <p>luuk.tol@hva.nl</p>
            
        </footer>

    </section>


<style>

section{
    border: solid var(--main-color);
    padding: 0 2vw 2vw 2vw;
    margin: 0 1vw 1vw 1vw;
    position: relative;
    max-width: 850px;
}

article{
    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
    }
}

h2{
    font-family: Eroded, Georgia, Times, 'Times New Roman', serif;
    color: var(--main-color);
    margin: 0;
    letter-spacing: 0.5rem;
    line-height: 5.5rem;
    font-size: 4rem;

    @media (min-width: 500px) {
        font-size: 2.5rem;
        background-color: var(--main-color);
        color: var(--background-color);
        width: calc(100% + 4vw); /* Grootte van de padding in .content-section + 2 om het te balanceren*/
        transform: translateX(-2vw); /* Grootte van de padding in .content-section */
    }

    .responsive-br-big-screen{
        display: none;
        @media (min-width: 500px) {
            display: inline;
        }
    }

    .responsive-br{
        display: inline;
        @media (min-width: 500px) {
            display: none;
        }
    }
}

    @supports (font-size: clamp(4rem, 10vw, 6rem)) {
        h2{
            font-size: clamp(4rem, 10vw, 6rem);

             @media (min-width: 500px) {
                text-align: center;
            }
        }
    }

.span-with-bg-black{
    background-color: var(--main-color);
    color: var(--background-color);
    text-align: center;
    font-size: 7rem;

    @media (min-width: 500px) {
        font-size: 5rem;
    }
}

    @supports (font-size: clamp(4rem, 10vw, 6rem)) {
       
        .span-with-bg-black{
            font-size: clamp(5.5rem, 8.5vw, 8.5rem);
             @media (min-width: 500px) {
                font-size: 5.5rem
            }
        }
    }

h3{
    margin: 0;
    font-family: Mirror, Georgia, Times, 'Times New Roman', serif;
    color: var(--main-color);
    font-size: 1.2rem;
    @media (min-width: 500px) {
        text-align: center;
        margin: 0.7rem 0;
    }
}

aside{
    position: absolute;
    top: 1vh;
    max-width: 60%;
    right: 1vw;
    display: grid;
    grid-template-rows: auto 1fr; 
    grid-template-areas: 
        "vid vid vid"
        "p-1 h4 p-2"; 
    gap: 10px;
    .non-read-text:first-child{
        grid-area: p-1;
    }
    .non-read-text:nth-child(2){
        grid-area: p-2;
    }
    @media (min-width: 500px) {
        position: static;
        max-width: 100%;
    }
}

.video-content{
    grid-area: vid;
    display: flex;
    justify-content: flex-end;
    .prison-vid{
        filter: grayscale(0.85);
        width: 70%;
        height: 100%;
        border: solid var(--main-color) 3px;
        object-fit: cover;
        pointer-events: none;
    }
    @media (min-width: 375px) {
        justify-content: center;
        .prison-vid{
            width: 80%;
        }
    }
}


.non-read-text{
    font-size: 0.3rem;
    @media (min-width: 500px) {
       font-size: 0.6rem; 
    }
}

h4{
    margin: 0;
    font-family: Eroded, Georgia, Times, 'Times New Roman', serif;
    writing-mode: vertical-rl;
    display: flex;
    align-items: flex-end;
    grid-area: h4;
    font-size: 0.8rem;
    @media (min-width: 400px) {
        font-size: 0.7rem;
    }
    @media (min-width: 500px) {
        font-size: 1rem;
    }
}

.links{
    position: absolute;
    top: 50%;
    right: 3vw;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    @media (min-width: 359px) {
        flex-direction: row;
        top: calc(50% + 3.5vh);
        right: 2vw;
    }
    @media (min-width: 388px) {
        top: calc(50% + 5.5vh);
        gap: 0.5rem;
    }
    @media (min-width: 425px) {
        gap: 1.5rem;
        right: 2vw;
    }
    @media (min-width: 500px) {
        display: none;
    }
}

footer{
    display: flex;
    align-items: center;
    p{
        margin: 0;
        width: 50%;
        font-size: 0.8rem;
    }
    p:nth-child(2){
        text-align: center;
        font-size: 1.5rem;
    }
}


</style>