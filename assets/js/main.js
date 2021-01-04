var heightW = window.innerHeight;
var widthW = window.innerWidth;
var moveXY=[{duration:4, x:Math.floor(widthW*.6), y:Math.floor(heightW*-0.1),ease:"linear"},
{duration:2, x:Math.floor(widthW*.6),y:Math.floor(heightW*-0.5),ease:"back"},
{duration:4, x:Math.floor(widthW*.1),y:Math.floor(heightW*-0.5),ease: "linear"},
{duration:3, x:Math.floor(widthW/2-(heightW*0.4*979/1518*.7)),y:-Math.floor((heightW-heightW*.4)/2),ease: "slow"}];

var moveXY2=[{duration:4, x:Math.floor(widthW*-.5), y:Math.floor(heightW*0.1),ease:"linear"},
{duration:2, x:Math.floor(widthW*-.5),y:Math.floor(heightW*0.5),ease:"back"},
{duration:4, x:Math.floor(0),y:Math.floor(heightW*0.5),ease: "linear"},
{duration:3, x:-Math.floor(widthW/2-(heightW*0.4*1278/1537*.7)),y:Math.floor((heightW-heightW*(.4+.07))/2),ease: "slow"}];




  function startHtml() {
    document.querySelector("#couple").style.left=`${Math.floor((widthW-(heightW*0.4/1652*1534))/2+(heightW*0.4/1652*1534))}px`;
    console.log(Math.floor((widthW-(heightW*0.4/1652*1534 ))/2))
    gsap.from("#dude", {duration:1,opacity:0});
    gsap.from("#girl", {duration:1,opacity:0});
    gsap.to("#leg1", {duration:1,transformOrigin:"5% -1%",rotate:20,delay:1});

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


    // gsap.timeline({ delay:6.4})
    // .to("#dude", {duration:4,x:600,y:-100,ease: "slow"})
    // .to("#dude", {duration:2,y: -400,ease: "expo"})
    // .to("#dude", {duration:4,x:-50,y: -400,ease: "back"})
    // .to("#dude", {duration:3,x:100,y:15,ease: "slow"})

    // move('#dude')
    // .to(500, 200)
    // .rotate(180)
    // .scale(.5)
    // .set('background-color', '#888')
    // .set('border-color', 'black')
    // .duration('2s')

    gsap.timeline({ delay:6.4})
    .to("#dude", moveXY[0])
    .to("#dude", moveXY[1])
    .to("#dude", moveXY[2])
    .to("#dude", moveXY[3])


    gsap.timeline({ delay:7})
    .to("#girl", moveXY2[0])
    .to("#girl", moveXY2[1])
    .to("#girl", moveXY2[2])
    .to("#girl", moveXY2[3])

    gsap.timeline({repeat:11, delay:7})
    .to("#rightLegG", {duration:.5,transformOrigin:"right 0%",rotate:-30,ease: "back"})  
    .to("#rightLegG", {duration:.5,transformOrigin:"right 0%",rotate:0,ease: "back"})
    gsap.timeline({repeat:11, delay:7})
    .to("#leftLegG", {duration:.5,transformOrigin:"5% -1%",rotate:30,ease: "back"})
    .to("#leftLegG", {duration:.5,transformOrigin:"5% -1%",rotate:0,ease: "back"})



    gsap.to("#headMain", {delay:6.4,duration:1,transformOrigin:"right bottom",rotate:4, yoyo:true,repeat:9});
    gsap.to("#cylinder", {delay:6.4,duration:1,transformOrigin:"left top",rotate:2, yoyo:true,repeat:9});
    gsap.to("#glases", {delay:6.4,duration:1,transformOrigin:"right top",rotate:5, yoyo:true,repeat:9});
     
    gsap.timeline({repeat:11, delay:6.4})
    .to("#leg2", {duration:.5,transformOrigin:"1% 0%",rotate:-30,ease: "back"})  
    .to("#leg2", {duration:.5,transformOrigin:"1% 0%",rotate:0,ease: "back"})


    gsap.timeline({repeat:11, delay:6.4})
    .to("#leg1", {duration:.5,transformOrigin:"5% -1%",rotate:30,ease: "back"})
    .to("#leg1", {duration:.5,transformOrigin:"5% -1%",rotate:0,ease: "back"})

    gsap.to("#dude",{delay:20, opacity:0,duration:1});
    gsap.to("#girl",{delay:20, opacity:0,duration:1});

    gsap.timeline({delay:20})
    .to("#couple",{opacity:1,duration:1})
    .to("#couple",{duration:2,rotationY:360,transformOrigin:"-25vw 50%"})
    .to("#couple",{x:-Math.floor((widthW-(heightW*0.4/1534*1652))/2), y:-Math.floor((heightW*.3)), duration:2})
    .to("#couple",{scale:.3,transformOrigin:`${Math.floor((widthW-375)/905*47)-75}vw ${5}vh`, opacity:0, duration:1})
    // -28vw 5vh
console.log(Math.floor((widthW-375)/905*47)-75)
  }