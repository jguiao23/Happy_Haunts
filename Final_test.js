//Welcome to Happy Haunts
// Credits to ChatGPT and Ajoconner for the source code that inspired the visual novel code
//https://editor.p5js.org/ajoconnor/sketches/oHg0goKGj


// Global Variables
let gameState = "novel";
let themeSong
let isPlaying= false;
let soundState = 0;
let firstNovel,minigame1,secondNovel;
let bunOg;
let lightUp;
let barImg;
let homeImg,BackGroundImg;
let bunDirty;
let img,mirror,mirrorImage,boxImage;

function preload(){
  bunOg = loadImage('allBun/Bun_Original.png');
  lightUp = loadImage('assets/light_up.png')
  barImg = loadImage('assets/Bar.png');
  candleImage = loadImage('assets/candle.png');
  homeImg = loadImage("assets/m_home.png");
  bunDirty = loadImage("allBun/bun_dirty.png");
  soundFormats('mp3');
  themeSong = loadSound("assets/Theme.mp3")
  boxImage = loadImage("assets/Spiderweb.png");
  BackGroundImg = loadImage("assets/AnnBackground.png")
}

function setup() {
   let canvas = createCanvas(600, 600);
canvas.parent('HappyHaunts');  
  
  
  // Gets all the dialogue array into a function
let chapter1 = getChapter1();
let chapter2 = getChapter2();
let chapter3 = getChapter3();
let MerylMinigame = getMerylMinigame();
let chapter4 = getChapter4();
let chapter5 = getChapter5();
let chapter6 = getChapter6();
let chapterFinal = getChapterFinal();
let chapterMirror = getChapterMirror();

//Calling all TextScenes
  firstNovel = new TextScene(chapter1, {
    boxImg:boxImage
  });
  secondNovel = new TextScene(chapter2,{
    boxImg:boxImage
  });
  thirdNovel = new TextScene(chapter3, {
    boxImg:boxImage

  });
  miniNovel = new TextScene(MerylMinigame, {
  });
  fourthNovel = new TextScene(chapter4, {
    boxImg:boxImage

  });
  fifthNovel = new TextScene(chapter5, {
    boxImg:boxImage

  });
  sixthNovel = new TextScene(chapter6, {
    boxImg:boxImage

  });
  finalNovel = new TextScene(chapterFinal, {
    boxImg:boxImage

  });
  mirrorNovel = new TextScene(chapterMirror, {
    boxImg:boxImage

  });


  miniGame = new MiniGame({ 
    playerSize: 30,
    bunImage:bunOg
  });
  minigameLight = new MiniGameLight({
    lightSwitchUp:lightUp
  });
  miniGame3 = new MiniGame3({
  
    barImage:barImg,
    Candle:candleImage
 });
 mHome= new Home({
    houseImage:homeImg
 })
 bunDirt = new BunDirty({
    DirtImage:bunDirty,

 })
 annBg = new AnnBackground({
    backGroundImg:BackGroundImg,
 })



}

function draw() {
  background(220);

  if(soundState === "1"){
    soundBox();
  }else if (soundState === "2"){
    soundStop();
  }
    
  

  if(gameState=== "novel"){
    annBg.show();
    push();
  firstNovel.displayBox();
    pop();
  firstNovel.displayText();
  }else if (gameState === "minigame") {
    miniGame.update();
    miniGame.show();
    miniGame.draw();
  }else if(gameState==="novel2"){
    push();
    secondNovel.displayBox();
    pop();
    secondNovel.displayText();
  }else if (gameState==="minigame2"){
    minigameLight.show();
    minigameLight.search(mouseX,mouseY);
    push();
    minigameLight.text();
    pop();
  }

   else if(gameState === "novel3"){
    mHome.show();
    push();
    thirdNovel.displayBox();
    pop();
    thirdNovel.displayText();
  }else if(gameState === "minigame3"){
    console.log("Here")
    miniGame3.show();
    miniGame3.bounce();
    miniGame3.update();
    push();
    miniGame3.text();
    pop();
  } else if(gameState === "novel4"){
    mHome.show();
    push();
    fourthNovel.displayBox();
    pop();
    fourthNovel.displayText();
  } else if(gameState === "novel5"){
    mHome.show();
    bunDirt.show();

    push();
    fifthNovel.displayBox();
    pop();
    fifthNovel.displayText();
  } else if(gameState === "novel6"){
    mHome.show();
    push();
    sixthNovel.displayBox();
    pop();
    sixthNovel.displayText();
  }
  else if(gameState === "novelFinal"){
    mHome.show();
    push();
    finalNovel.displayBox();
    pop();
    finalNovel.displayText();
  }
  else if(gameState === "novelMirror"){
    push();
    mirrorNovel.displayBox();
    pop();
    mirrorNovel.displayText();
  } else if (gameState === "thankYou"){
    background(0)
    textAlign(CENTER);
    fill(255);
    textSize(32);
    text("Thanks For Playing", width/2,height/2);
  }
  
  


}


function mousePressed() {
  if (gameState === "novel") {
    firstNovel.nextLine();
    // When reaching the last dialogue line, transition to minigame.
    if (firstNovel.currentIndex >= firstNovel.dialogue.length - 1) {
      gameState = "minigame";
    }
  } else if (gameState === "minigame") {
    miniGame.mousePressed(); // This will increase miniGame.score
    // Optionally add a check here to transition out of the minigame, e.g.:
    if (miniGame.score >= 5) { gameState = "novel2"; }
  } else if (gameState === "novel2") {
    secondNovel.nextLine();
    if(secondNovel.currentIndex>=secondNovel.dialogue.length - 1){
      gameState = "minigame2";
    }  
  }else if(gameState==="minigame2"){
    minigameLight.mousePressed(mouseX,mouseY);
    if(minigameLight.counter>=5){
      gameState = "novel3"
    }
  }

  
  else if (gameState === "novel3") {
    thirdNovel.nextLine();
    if(thirdNovel.currentIndex>=thirdNovel.dialogue.length - 1){
      gameState = "minigame3";
    }
 }
   else if (gameState === "minigame3") {
    miniGame3.mousePressed();
    if(miniGame3.hit>=2){
      gameState = "novel4";
    }
    
  }else if (gameState === "novel4") {
    fourthNovel.nextLine();
    if(fourthNovel.currentIndex>=fourthNovel.dialogue.length - 1){
      gameState = "novel5";
    }  
 }else if (gameState === "novel5") {
    fifthNovel.nextLine();
    if(fifthNovel.currentIndex>=fifthNovel.dialogue.length - 1){
      gameState = "novel6";
    }
      
  }else if (gameState === "novel6") {
    sixthNovel.nextLine();
    if(sixthNovel.currentIndex>=sixthNovel.dialogue.length - 1){
      gameState = "novelFinal";
    }
 }else if (gameState === "novelFinal") {
    finalNovel.nextLine();
    if(finalNovel.currentIndex>=finalNovel.dialogue.length - 1){
      gameState = "thankYou";
    }
  } 
  
}








//ALL VISUAL NOVEL TEXT
function getChapter1(){
// Create the dialogue array
return[
  { 
    name:"???",
    line: "Happy hundred Years of haunt-aversary to me, I suppose." },

  { 
    name:"Ann",
    line: "My name is Ann." },

  { 
    name: "Ann",
    line: "Was Ann..." 
  },
  { 
    name:"Ann",
    line: "I died in 1922 when I was 18." 

  },
  { 
    name:"Ann",
    line: "Asthma’s such a bitch, isn’t it?" 
  },
  { 
    name:"Ann",
    line: "I’ve had this large, plush bunny rabbit called Bun Bun since I was a small child." 
  },
  { 
    name:"Ann",
    line: "I’m attached to it, you could say." 
  },
  { 
    name:"Ann",
    line: "I accompany her everywhere."
   },
  { name:"Ann",
    line: "Since my passing, my Bun Bun has been bought and sold to a variety of families." 
  },
  { name:"Ann",
    line: "At first, I just watched them." 
  },
  { name:"Ann",
    line: "Watched their children play as I once did." 
  },
  { name:"Ann",
    line: "Watched those children grow up and grow tired of Bun Bun.." 
  },
  { name:"Ann",
    line: "And the cycle would repeat." 
  },
  { name:"Ann",
    line: "Sadly, Bun Bun aged like the children, but I stayed frozen in time.." 
  },
  { name:"Ann",
    line: "She would get dirtier and rattier after every child." 
  },
  { name:"Ann",
    line: "Not everyone was as gentle with Bun Bun as I would have hoped." 
  },
  { name:"Ann",
    line: "Hell! Some little bastards would stretch her arms and legs so much, I worried they would burst and her stuffing would pour out!" 
  },
  { name:"Ann",
    line: "Oh, you’d better believe I tried to give them a piece of my mind!" 
  },
//used to break scene
  { line: "N/A"}
  ];
}

function getChapter2(){
  return[
    { name:"Ann",
      line: "But, ah! You should have seen their faces!" 
    },

    { name:"Ann",
      line: "Haunting became so much fun!" 
    },
    { name:"Ann",
      line: "I wanted to try and see if I could scare the adults too." 
    },
    {line:"N?A"}
  ];
}

function getChapter3(){
  return[
    { name:"Ann",
      line: "After several decades of haunting families, my name started to garner attention." 
    },
    { name:"Ann",
      line: "Ghost hunting started to become a popular line of work.." 
    },
    { name:"Ann",
      line: "and my new hobby turned into good publicity for whoever could get their hands on my dear old friend." 
    },
    { name:"Ann",
      line: "They would bring all types of equipment to try and get a rise out of me." 
    },
    { name:"Ann",
      line: "Recording devices, cameras, small boxes on the ground that would light up when I step near them." 
    },
    { name:"Ann",
      line: " I started to learn more about new technology and get with the times." 
    },
    { name:"Ann",
      line: "My fluffy friend is even on the tele sometimes! Lucky Bun!" 
    },
    { name:"Ann",
      line: "At the moment, Bun Bun is on display in someone’s home." 
    },
    { name:"Ann",
      line:"A young woman, she apparently purchased Bun off of something called the World Wide Web."
    },
    { name:"Ann",
      line: "I do hope that doesn’t mean my Bunny has any spiders on her. Ick!" 
    },
    { name:"Ann",
      line: "The woman will sit down with Bun in front of a camera, and attempt to ask for “signs” from me." 
    },
    { name:"Ann",
      line: "A sign?" 
    },
    { name:"Ann",
      line: "What, does she want me to draw a stop sign for her?" 
    },
    { name:"Ann",
      line: "Sometimes I give her a show, sometimes I let her wonder if I’m still here or not." 
    },
    { name:"Ann",
      line: "The woman has always given me a strange feeling." 
    },
    { name:"Ann",
      line: "She’s very polite, and… sometimes, we’d have visitors." 
    },
    { name:"Ann",
      line: "Visitors that are like me!" 
    },
    { name:"Ann",
      line: "The thing is, though.. She would know when they’re here." 
    },
    { name:"Ann",
      line: "Which made me start to wonder.." 
    },
    { name:"Ann",
      line: "Can.. Can she see me?" 
    },
    { name:"Ann",
      line: "I have to test this theory." 
    },
  ]
}

function getMerylMinigame(){
  return[
    //0
  { name:"The Strange Woman",
    line: "“Hello, everyone! Today, I have some fun crystals to show you!”" 
  },
  //1
  { name:"Ann",
    line: "Oh, she’s talking to that camera again." 
  },
  //2
  { name:"Ann",
    line: "Is there someone on the other end after all?" 
  },
  //3
  { name:"The Strange Woman",
    line: "This one is called a tower." 
  },
  //4
  { name:"Ann",
    line: "Ohho, and I have some things to show you." 
  },
  //5
  { name:"Ann",
    line: "I sneak over to a panel on the wall that I’ve seen her use to turn the lights on and off." 
  },
  { name:"Ann",
    line: "I rested my hands on it, and channeled my focus to make it flicker." 
  },
  { name:"The Strange Woman",
    line: "You see, this blue one—" 
  },
  { name:"Ann",
    line: "She got really quiet,and her eyes squinted." 
  },
  { name:"Ann",
    line: "A chill went up my spine." 
  },
  { name:"Ann",
    line: "What is this?!" 
  },
  { name:"Ann",
    line: "The woman smiled, and carried on with her haul." 
  },
  { name:"The Strange Woman",
    line: "Excuse me?" 
  },
  { name:"The Strange Woman",
    line: "Excuse me, how dare you ignore me?" 
  },
  { name:"The Strange Woman",
    line: "I am the infamous Ann!" 
  },

]
}

function getChapter4(){
  return[
  { name:"The Strange Woman",
    line: "“This green tower—HEY!”" 
  },  
  { name:"The Strange Woman",
    line: "“Be careful, please, Ann!”" 
  },  
  { name:"Ann",
    line: "Oh... That’s new." 
  },  
  { name:"Ann",
    line: "Can… you see me…?" 
  },  
  { name:"Ann",
    line: "I’m supposed to scare her, not the other way around." 
  },  
  { name:"The Strange Woman",
    line: "I can see silhouettes of you here and there." 
  },  
  { name:"The Strange Woman",
    line: "And hear you from time to time." 
  },  
  { name:"The Strange Woman",
    line: "It’s part of my gift." 
  },  
  { name:"Meryl",
    line: "My name’s Meryl, okay?" 
  },  
  { name:"Meryl",
    line: "I want to be friends, Ann!" 
  },  
  { name:"Meryl",
    line: "I know your story, I know you passed young." 
  },  
  { name:"Meryl",
    line: "I’m just a bit older than you." 
  },  

  { name:"Meryl",
    line: "I bought your stuffed rabbit off of Ebay." 
  },  
  { name:"Meryl",
    line: "There are many haunted toys and objects like yours that have spirits attached to them." 
  },  
  { name:"Meryl",
    line: "There are others just like you!" 
  },  
  { name:"Meryl",
    line: "I chose you and Bun Bun because I resonated with you," 
  },  
  { name:"Meryl",
    line: "I have the same illness as you too." 
  },  
  { name:"Meryl",
    line: "But don’t worry! Medicine has advanced so much." 
  },  
  { name:"Meryl",
    line: "I’m sorry they didn’t have the same medicine for you in your time." 
  }, 
  { name:"Meryl",
    line: "Is it alright with you that I have Bun Bun?" 
  }, 
  { name:"Meryl",
    line: "I promise to take care of you both." 
  }, 
  { name:"Ann",
    line: "Why… I don’t know what to say." 
  }, 
  { name:"Ann",
    line: "I’ve never encountered a person I didn’t scare." 
  }, 
  { name:"Ann",
    line: "Much less a person I related to." 
  }, 
  { name:"Ann",
    line: "I’d forgotten what talking to someone else was like." 
  }, 
  { name:"Meryl",
    line: "Here! I have an idea,hold on!" 
  }, 
]
}

function getChapter5(){
  return[
    { name:"Meryl",
      line: "Are you happy with how I’ve displayed Bun Bun?" 
    },  

    { name:"Ann",
      line: "...My dear old friend had been through so much over the last century." 
    },  
    { name:"Ann",
      line: "If we’re here to stay… I think she deserves a pampering." 
    },  
    { name:"Ann",
      line: "I nudged the bright blue bar of soap into the sink." 
    },  
    { name:"Meryl",
      line: "Would you… like me to wash Bun Bun?" 
    },  
    { name:"Ann",
      line: "Please..." 
    }, 
    { name:"Ann",
      line: "I know you’re worried,but don’t be." 
    },  
    { name:"Ann",
      line: "I’m putting it on a gentle cycle." 
    },   
    { name:"",
      line: "*time passes*" 
    }, 
    { name:"Ann",
      line: "The crust, dust, and mustiness had disappeared!" 
    },  
    { name:"Meryl",
      line: "How does she look, Ann?" 
    },    
    { name:"Ann",
      line: "I jumped for joy, my emotional energy making the dryer door flap open and shut a couple times." 
    },  
    { name:"Ann",
      line: "It made Meryl laugh. Which made me laugh with her." 
    },  
    { name:"Ann",
      line: "Alright, next up is sewing her back together! Let’s go!" 
    },              
  ]
}
function getChapter6(){
  return[
    { name:"Meryl",
      line: "Alrighty, let’s see here." 
    }, 
    { name:"Meryl",
      line: "Let’s breathe some life into ‘er, shall we" 
    }, 
    { name:"Meryl",
      line: "Ann, tip over the color that you want me to sew her arms and legs with." 
    }, 
    { name:"Ann",
      line: "*Player Picks color" 
    }, 
    { name:"Meryl",
      line: "Oh, interesting choice." 
    }, 
    { name:"Meryl",
      line: "How about the color of her ears?" 
    }, 
    { name:"Ann",
      line: "Player Picks Color" 
    }, 
    { name:"Meryl",
      line: "You got it!" 
    }, 
    { name:"Meryl",
      line: "Hehe, alright, last color choice." 
    }, 
    { name:"Meryl",
      line: "Time for her eyes." 
    }, 
    { name:"Ann",
      line: "Player picks one last time" 
    }, 
    {
      name:"Meryl",
      line:"Okay, final touches…"
    },
    {
      name:"Meryl",
      line:"SCENE BREAK"
    },
  ]
}
function getChapterFinal(){
return[
  {
    name:"Ann",
    line:"As Meryl snipped the final thread, I couldn’t help but stare at the revived Bun Bun"
  },
  {
    name:"Ann",
    line:"With all the energy I could muster"
  },
  {
    name:"Ann",
    line:" I grabbed her from Meryl’s hands and hugged my friend close."
  },
  {
    name:"Ann",
    line:"We spun together through the living room."
  },
  {
    name:"Ann",
    line:"I looked back to Meryl to say thank you,"
  },
  {
    name:"Ann",
    line:"But first, I had to laugh at her face."
  },
  {
    name:"Ann",
    line:"Her jaw had dropped at the sight of Bun Bun spinning seemingly on her own."
  },
  {
    name:"Ann",
    line:"I’ll take that as I did a good job?"
  },
  {
    name:"Meryl",
    line:"I needed to tell her..."
  },
  {
    name:"Meryl",
    line:"SCENE BREAK"
  },
]
}
function getChapterMirror(){
  return[
  {
    name:"Ann",
    line:" I turned on the hot water again to let the steam fog the mirror."
  },
  {
    name:"Ann",
    line:"Meryl heard the water and the swiping at the mirror and followed."
  },
  {
    name:"Ann",
    line:"She leaned in the doorway,took one look at the mirror, and began to cry."
  },
  {
    name:"Ann",
    line:"She leaned in the doorway,took one look at the mirror, and began to cry."
  },
  {
    name: "Ann",
    line:"Thank You, My Friend."
  },
  
]
}

function soundBox(){
  if (!themeSong.isPlaying()){
    themeSong.play();
  }
}
function soundStop(){
  themeSong.stop();
}
function keyPressed(){
  soundState= key;
}