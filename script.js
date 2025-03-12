


function mouseScale(){
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;   
    var yprev = 0;   

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;
        xscale = gsap.utils.clamp(0.7, 1.3, xdiff);
        yscale = gsap.utils.clamp(0.7, 1.3, ydiff);
        
        xprev = dets.clientX;
        yprev = dets.clientY;
        
        circleMouse(xscale, yscale);

        var timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
   
        }, 100);
    });
}

function circleMouse(xscale, yscale){
   window.addEventListener("mousemove", function(dets){
        // mouse scale ke pehle, document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;

        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
 
    })
}

function pageOneAnime(){
    var tl = gsap.timeline();

    tl.from("nav a",{
        opacity:0,
        duration:0.8,
        stagger:0.2
    })
    tl.to(".tt",{
        y:0,
        stagger:0.2
    })
    
}

mouseScale();
pageOneAnime();
circleMouse();

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function(dets){

        
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power1,
            
        })
    })
    elem.addEventListener("mousemove", function(dets){

        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate:gsap.utils.clamp(-20,20, diffrot),
        })
    })
})


// gsap.to(".text",{
//     scrollTrigger:{
//         trigger:".pg3",
//         pin:true,
//         start:"top top",
//         end:"bottom bottom",
//         endTrigger:"#last",
//         markers:true,
//         scrub:2,
//     },
//     y:"-300%",
// })

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".pg3",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:"#last",
        markers:true,
        scrub:2,
}});
tl
.to(".text",{
    y:"-300%",

},'a')

.to(".images",{
    y:"-300%",
    duration:0.8
},'a')
