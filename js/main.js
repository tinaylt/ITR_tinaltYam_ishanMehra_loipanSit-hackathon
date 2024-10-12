(() => {

//mobile menu//
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const lines = document.querySelectorAll('.line');


//Video player//
const playerCon = document.querySelector('#player-container');
const player = document.querySelector('video');
const videoControls = document.querySelector('#video-controls');
const playButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');
const stopButton = document.querySelector('#stop-button');
const volumeSlider = document.querySelector("#change-vol");
const fullScreen = document.querySelector("#full-screen");

//Finalist Gallery//
const finalists = [
  {
    label: "FINALIST - 1",
    winner: "images/place-holder1.png",
    webDeveloper: "Ishan",
    graphicDesigner: "Roy",
    videoDesigner: "Tina",
    motionDesigner: "Joe"
  },

  {
    label: "FINALIST - 2",
    winner: "images/place-holder2.png",
    webDeveloper: "Mary",
    graphicDesigner: "Tom",
    videoDesigner: "June",
    motionDesigner: "Mark"
  },

  {
    label: "FINALIST - 3",
    winner: "images/place-holder3.png",
    webDeveloper: "Charile",
    graphicDesigner: "Peter",
    videoDesigner: "Chris",
    motionDesigner: "Anna"
  },
];

const developers = [
  {
   devName: "Roy",
   devImage: "images/dev1.png",
   description: "Raise awareness and donations for the construction and installation of a stone memorial depicting scenes from joint battles fought by Indian and Canadian soldiers. Ensure the sacrifices of these soldiers are remembered and honored.&nbsp;Inspire future generations with the values of humanity and freedom through the commemoration of this shared history."
  },

  {
    devName: "Tina",
    devImage: "images/dev3.png",
    description: "Hi, I'm Tina! Originally from Hong Kong, I graduated from Fanshawe College with a focus on Interactive Media. I have a passion for both design and coding, and I've worked on various video and graphic design projects. &nbsp; Outside of work, I love exploring new places and learning something new whenever I can. It's exciting to bring creativity and technical skills together, and I'm always eager to take on new challenges"
   },
 
   {
    devName: "Ishan",
    devImage: "images/dev2.png",
    description: "Raise awareness and donations for the construction and installation of a stone memorial depicting scenes from joint battles fought by Indian and Canadian soldiers. Ensure the sacrifices of these soldiers are remembered and honored.&nbsp;Inspire future generations with the values of humanity and freedom through the commemoration of this shared history."
   },
];



//Funtion//
//mobile menu//
function toggleMenu() {
    const openMenu = hamburger.classList.toggle('active');
    mobileNav.classList.toggle('hide', !openMenu);
    lines.forEach(line => line.classList.toggle('active', openMenu));
}

//video player//
player.controls = false;
videoControls.classList.remove('hidden');


// Basic Video controls, similar to what we have done with audio
function playVideo() {
    player.play();
}

function pauseVideo() {
    player.pause();
}

function stopVideo() {
    player.pause();
    player.currentTime = 1;
}

function changeVolume() {
    player.volume = volumeSlider.value;
}


function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      // Need this to support Safari
      document.webkitExitFullscreen();
    } else if (playerCon.webkitRequestFullscreen) {
      // Need this to support Safari
        playerCon.webkitRequestFullscreen();
    } else {
        playerCon.requestFullscreen();
    }
}

function hideControls() {
    if (player.paused) {
      return;
    } 
    videoControls.classList.add('pannel');
  }
  
  // showControls displays the video controls
  function showControls() {
    videoControls.classList.remove('pannel');
  }

//Finalist Gallery//

let currentIndex = 0;

function updateGallery() {
  const currentFinalist = finalists[currentIndex];

  document.getElementById("finalist-site").src = currentFinalist.winner;
  document.getElementById("finalist-label").innerHTML = `<p>${currentFinalist.label}</p>`;
  document.getElementById("finalist-name1").innerHTML = `${currentFinalist.webDeveloper}`;
  document.getElementById("finalist-name2").innerHTML = `${currentFinalist.graphicDesigner}`;
  document.getElementById("finalist-name3").innerHTML = `${currentFinalist.videoDesigner}`;
  document.getElementById("finalist-name4").innerHTML = `${currentFinalist.motionDesigner}`;
}

//Developer Gallery

let currentDevIndex = 0;

function updateDevGallery() {
  const currentDeveloper = developers[currentDevIndex];

  document.getElementById("dev-slide").src = currentDeveloper.devImage;
  document.getElementById("dev-label").innerHTML = `<p>${currentDeveloper.devName}</p>`;
  document.getElementById("dev-desciption").innerHTML = `${currentDeveloper.description}`;

}










//Event handler//
//mobile menu//
hamburger.addEventListener('click', toggleMenu);

//Video Player//

playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
stopButton.addEventListener("click", stopVideo);
volumeSlider.addEventListener("change", changeVolume);

fullScreen.addEventListener("click", toggleFullScreen);
videoControls.addEventListener('mouseenter', showControls);
videoControls.addEventListener('mouseleave', hideControls);
player.addEventListener('mouseenter', showControls);
player.addEventListener('mouseleave', hideControls);

//Finalist Gallery//

//next button//
document.getElementById("next").addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % finalists.length; 
  updateGallery();
});

//previous button//
document.getElementById("prev").addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + finalists.length) % finalists.length;
  updateGallery();
});

//Developer button//

document.getElementById("dev-next").addEventListener("click", function() {
  currentDevIndex = (currentDevIndex + 1) % developers.length; 
  updateDevGallery();
});

//previous button//
document.getElementById("dev-prev").addEventListener("click", function() {
  currentDevIndex = (currentDevIndex - 1 + developers.length) % developers.length;
  updateDevGallery();
});

})();