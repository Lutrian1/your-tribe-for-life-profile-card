<div class="tape-1"></div>
<div class="tape-2"></div>
<div class="tape-3"></div>

<style>
    
    .tape-1, .tape-2, .tape-3{
        content: ' - ';
        background-color: #000000;
        background-image: url("https://www.transparenttextures.com/patterns/diagmonds-light.png");
        opacity: 50%;
        position:absolute;
        box-shadow: 1px 0px 0px #bdbdbd;
        color: #ffffff0d;
        z-index: 999;
        display: block;
        border-radius: 2px;
    }

    .tape-1{
        content: ' - ';
        width: 75px;
        min-height: 30px;
        top: 0vh;  
        left: 1vw;
        transform: translate(-50%, -50%) rotate(-2deg);
        @media (min-width: 920px) {
            width: 100px;
            min-height: 50px;
            top: 5vh;  
            left: 1vw;
        }
    }

    .tape-2{
        content: ' - ';
        width: 40px;
        min-height: 30px;
        top: 0vh;  
        right: 0;
        transform: translate(-50%, -50%) rotate(9deg);
        @media (min-width: 920px) {
            width: 150px;
            min-height: 60px;
            top: 2vh;  
            right: -5vw;
        }
    }

    .tape-3{
        bottom: -3vh;  
        left: 50%;
        width: 100px;
        min-height: 30px;
        transform: translate(-50%, -50%) rotate(7deg);
        @media (min-width: 920px) {
            width: 200px;
            min-height: 50px;
            bottom: -6vh;  
        }
    }

</style>