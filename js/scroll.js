gsap.registerPlugin(ScrollTrigger);

const playhead = {

    frame:0

};

gsap.to(playhead,{

    frame:CONFIG.frameCount-1,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"+=" + CONFIG.scrollLength,

        pin:true,

        scrub:1,

        anticipatePin:1

    },

    onUpdate(){

        drawFrame(
            Math.round(playhead.frame)
        );

    }

});