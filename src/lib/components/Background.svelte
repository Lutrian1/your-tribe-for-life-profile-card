<script>
    import Fake_Paper_Mobile from '$lib/assets/fake-paper-mobile.avif';
    import Fake_Paper_Desktop from '$lib/assets/fake-paper-desktop.avif';
    import BG_Audio from '$lib/assets/BG_Audio.mp3';

    import { onMount } from 'svelte';
    import Audio_On from '$lib/assets/AUDIO_ON.avif';
    import Audio_Off from '$lib/assets/AUDIO_OFF.avif';

    let audio;
    let is_Audio_Playing = false;
    let audio_Image = Audio_Off;

    function toggle_Audio() {
        if (is_Audio_Playing) {
            audio.pause();
            audio_Image = Audio_Off;
        } else {
            audio.play();
            audio_Image = Audio_On; 
        }
        is_Audio_Playing = !is_Audio_Playing; 
    }
    onMount(() => {
        audio = new Audio(BG_Audio);
        audio.loop = true; 
    });

</script>

<div class="background-noise"></div>

<button on:click={ toggle_Audio } aria-label="Toggle audio" class="audio-button">
    <img width="50" height="50" src="{ audio_Image }" alt="Audio Control">
</button>

<audio bind:this={ audio } src="{ BG_Audio }" autoplay loop preload="auto">
    Your browser does not support the audio element.
</audio>

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

.audio-button{
        border: none; 
        background: none; 
        padding: 0; 
        cursor: pointer;
        
        @media (min-width: 920px) {
            position: absolute;
            right: 2rem;
            bottom: 2rem;
            width: 8rem;
            height: 8rem;
            img{
                width: 8rem;
                height: 8rem;
            }
        }
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
