<script>
    import Fake_Paper_Mobile from '$lib/assets/fake-paper-mobile.avif';
    import Fake_Paper_Desktop from '$lib/assets/fake-paper-desktop.avif';
    import BG_Audio from '$lib/assets/BG_Audio.mp3';
</script>

<div class="background-noise"></div>

<audio src="{ BG_Audio }" autoplay loop></audio>

<img src="{Fake_Paper_Mobile}" alt="" class="fake-paper-mobile">

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

.fake-paper-mobile{
    position: fixed;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    z-index: -2;
    opacity: 0.5;
}
    
</style>
