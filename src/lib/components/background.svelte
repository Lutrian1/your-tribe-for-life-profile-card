<script>
    import Fake_Paper_Mobile from '$lib/assets/fake-paper-mobile.avif';
    import Fake_Paper_Desktop from '$lib/assets/fake-paper-desktop.avif';
</script>

<div class="background-noise"></div>

<img src="{Fake_Paper_Mobile}" alt="" class="fake-paper-mobile">
<img src="{Fake_Paper_Desktop}" alt="" class="fake-paper-desktop">

<style>

.background-noise{
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200%;
    background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
    background-repeat: repeat;
    opacity: .9;
    z-index: 100;
    pointer-events: none;
}

@media (max-width: 767px){

    .fake-paper-mobile{
        position: fixed;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        z-index: -2;
        opacity: 0.5;
    }

    .fake-paper-desktop{
        display: none;
    }

}
@media (min-width: 768px){

    .fake-paper-desktop{
        position: fixed;
        top: 0;
        left: -5%;
        width: 110%;
        height: 100%;
        z-index: -2;
        opacity: 0.8;
    }

    .fake-paper-mobile{
        display: none;
    }

}
    
</style>