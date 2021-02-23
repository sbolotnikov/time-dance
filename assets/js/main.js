var heightW = window.innerHeight;
var widthW = window.innerWidth;
function getYCenter(el){
 return Math.floor(document.querySelector(el).getBoundingClientRect().top+document.querySelector(el).getBoundingClientRect().height/2);

}
  function startHtml() {
    document.querySelector("#couple").style.left=`${Math.floor((widthW-(heightW*0.4/1652*1534))/2+(heightW*0.4/1652*1534))}px`;
    console.log(Math.floor((widthW-(heightW*0.4/1652*1534 ))/2))
    gsap.from("#dude", {transformOrigin:"50% 50%",opacity:0});
    gsap.to("#dude", {duration:2,scale:3, rotateY:-40 });
    gsap.to("#leg1", {duration:1, transformOrigin:"5% -1%",rotate:20,delay:1});


    gsap.from("#girl", {transformOrigin:"50% 50%",scale:.2,opacity:0});
    gsap.to("#girl", {duration:2,scale:.5});
    gsap.to("#rightArmG", {transformOrigin:"right 10%",rotate:90,duration:4,delay:1});
    gsap.to("#rightArmG", {duration:4, y: 20,x:-20,delay:1});
    gsap.to("#leftArmG", {duration:4,transformOrigin:"left 5%",rotate:-100,delay:1})
    gsap.to("#leftArmG", {duration:4, y: 40,x:20,delay:1});
    gsap.to("#bodyTopG", {transformOrigin:"50% 50%",rotate:-15,duration:1,delay:5});
    gsap.to("#bodyTopG", {transformOrigin:"50% 50%",rotate:15,duration:1,delay:6});


    
    var tl= gsap.timeline();
    tl.to("#rightArm", {transformOrigin:"10% 10%",rotate:-125,duration:.5,delay:2});
    tl.to("#rightLowerComb", {transformOrigin:"10% 10%",rotate:-56,duration:.5});
    tl.to("#rightThumb", {transformOrigin:"25% -5%",rotate:-110,duration:.5});
    tl.to("#rightLowerComb", {transformOrigin:"15% 15%",rotate:6,duration:.5});
    tl.to("#bodyTop", {transformOrigin:"left 100%",rotate:15,duration:.5});
    gsap.timeline()
    .to("#cylinder", {transformOrigin:"200% 200%",rotate:38,duration:.5, delay:3.5})
    .to("#cylinder", {transformOrigin:"200% 200%",rotate:0,duration:.5})
    gsap.timeline()
    .to("#rightLowerComb", {transformOrigin:"15% 15%",rotate:-56,duration:.5, delay:4})
    .to("#rightThumb", {transformOrigin:"25% -5%",rotate:60,duration:.2})
    .to("#rightLowerComb", {transformOrigin:"12% 17%",rotate:0,duration:.5})   
    .to("#rightArm", {transformOrigin:"8% 10%",rotate:0,duration:.5})
    .to("#bodyTop", {transformOrigin:"left 100%",rotate:0,duration:.5})
    .to("#leg1", {duration:.5,transformOrigin:"5% -1%",rotate:0})
    .to("#leg2", {duration:.1, y: 50})
    .to("#leg1", {duration:.1, y: -70,x:20})
    .to("#leg2", {duration:.1,transformOrigin:"1% 0%",rotate:20});

    gsap.timeline({ delay:6.4})
    .to("#rightArm", {duration:4,transformOrigin:"8% 10%",rotate:-60})
    .to("#rightArm", {duration:1,transformOrigin:"8% 10%",rotate:-50, yoyo:true,repeat:5});

    gsap.to("#leftArm", {duration:4, y: -80,x:120,delay:6.4});

    gsap.timeline({ delay:6.4})
    .to("#leftArm", {duration:4,transformOrigin:"5% 5%",rotate:100})
    .to("#leftArm", {duration:1,transformOrigin:"5% 5%",rotate:90, yoyo:true,repeat:5});


    gsap.to("#dude", {delay:6.4,duration:4, rotationY:40, scale:1, x:Math.floor(widthW/2-(heightW*0.4*979/1518*.7)),y:-Math.floor(-heightW/2+getYCenter("#dude")),ease: "slow"})
    gsap.to("#girl", {delay:7,duration:3,  scale:1, x:-Math.floor(widthW/2-(heightW*0.4*1278/1537*.7)),y:Math.floor(heightW/2-getYCenter("#girl")),ease: "slow"})

    gsap.timeline({repeat:2, delay:7})
    .to("#rightLegG", {duration:.5,transformOrigin:"right 0%",rotate:-30,ease: "back"})  
    .to("#rightLegG", {duration:.5,transformOrigin:"right 0%",rotate:0,ease: "back"})
    gsap.timeline({repeat:2, delay:7})
    .to("#leftLegG", {duration:.5,transformOrigin:"5% -1%",rotate:30,ease: "back"})
    .to("#leftLegG", {duration:.5,transformOrigin:"5% -1%",rotate:0,ease: "back"})



    gsap.to("#headMain", {delay:6.4,duration:1,transformOrigin:"right bottom",rotate:4, yoyo:true,repeat:4});
    gsap.to("#cylinder", {delay:6.4,duration:1,transformOrigin:"left top",rotate:2, yoyo:true,repeat:4});
    gsap.to("#glases", {delay:6.4,duration:1,transformOrigin:"right top",rotate:5, yoyo:true,repeat:4});
     
    gsap.timeline({repeat:3, delay:6.4})
    .to("#leg2", {duration:.5,transformOrigin:"1% 0%",rotate:-30,ease: "back"})  
    .to("#leg2", {duration:.5,transformOrigin:"1% 0%",rotate:0,ease: "back"})


    gsap.timeline({repeat:3, delay:6.4})
    .to("#leg1", {duration:.5,transformOrigin:"5% -1%",rotate:30,ease: "back"})
    .to("#leg1", {duration:.5,transformOrigin:"5% -1%",rotate:0,ease: "back"})

    gsap.to("#dude",{delay:10, opacity:0,duration:1});
    gsap.to("#girl",{delay:10, opacity:0,duration:1});

    gsap.timeline({delay:10})
    .to("#couple",{opacity:1,duration:1, transformOrigin:`${-35+(widthW-300)/1100*15}vw 50%`})
    .to("#couple",{duration:2,rotationY:360})
    .to("#couple",{transformOrigin:"50% 50%", y:-Math.floor((heightW*.5)), duration:2})
    // .to("#couple",{scale:.3,transformOrigin:`${Math.floor((widthW-375)/905*47)-75}vw ${5}vh`, opacity:0, duration:1})
    gsap.timeline({ delay:13}).to("#mainSite",{duration:3,opacity:1})
    
    // -28vw 5vh
console.log(Math.floor((widthW-375)/905*47)-75)
  }