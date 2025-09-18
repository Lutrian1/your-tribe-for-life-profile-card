<div class="play">Play - (HINT:Hover op documenten)</div>
<div class="time">--:--</div>
<div class="record-speed">SLP 0:00:00</div>


<style>

    *{
        font-family: VHS, Georgia, Times, 'Times New Roman', serif; 
        color: white;
        font-size: 5rem;
    }

    .play{
        display: none;
    }

    .time{
        display: none;
    }

    .record-speed{
        display: none;
    }

    @media (min-width: 920px) {
        .play{
            display: block;
            position: absolute;
            left: 2rem;
            top: 2rem;
            will-change: text-shadow;
            animation: rgb 2s steps(9) 0s infinite alternate;
            animation: type 1.2s infinite alternate;
            margin: 0;
        }

          .time {
            display: block;
            position: absolute;
            right: 2rem;
            top: 2rem;
            will-change: text-shadow;
            animation: rgb 1s steps(9) 0s infinite alternate;
        }

        .record-speed {
            display: block;
            position: absolute;
            left: 2rem;
            bottom: 2rem;
            will-change: text-shadow;
            animation: rgb 1s steps(9) 0s infinite alternate;
        }
    }

    @keyframes rgb {
        0% {
            text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 1px rgba(251, 0, 231, 0.8), 0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8), 0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
        }
        25% {
            text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 1px rgba(251, 0, 231, 0.8), 0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8), 0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
        }
        45% {
            text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 5px 0 1px rgba(251, 0, 231, 0.8), 0 5px 1px rgba(0, 233, 235, 0.8), -5px 0 1px rgba(0, 242, 14, 0.8), 0 -5px 1px rgba(244, 45, 0, 0.8), 5px 0 1px rgba(59, 0, 226, 0.8);
        }
        50% {
            text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), -5px 0 1px rgba(251, 0, 231, 0.8), 0 -5px 1px rgba(0, 233, 235, 0.8), 5px 0 1px rgba(0, 242, 14, 0.8), 0 5px 1px rgba(244, 45, 0, 0.8), -5px 0 1px rgba(59, 0, 226, 0.8);
        }
        55% {
            text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 3px rgba(251, 0, 231, 0.8), 0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8), 0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
        }
        90% {
            text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), -5px 0 1px rgba(251, 0, 231, 0.8), 0 5px 1px rgba(0, 233, 235, 0.8), 5px 0 1px rgba(0, 242, 14, 0.8), 0 -5px 1px rgba(244, 45, 0, 0.8), 5px 0 1px rgba(59, 0, 226, 0.8);
        }
        100% {
            text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 5px 0 1px rgba(251, 0, 231, 0.8), 0 -5px 1px rgba(0, 233, 235, 0.8), -5px 0 1px rgba(0, 242, 14, 0.8), 0 5px 1px rgba(244, 45, 0, 0.8), -5px 0 1px rgba(59, 0, 226, 0.8);
        }
    }

    @keyframes type {
        0%, 19% {opacity:0;}
        20%, 100% {opacity:1;}
    }

    
</style>