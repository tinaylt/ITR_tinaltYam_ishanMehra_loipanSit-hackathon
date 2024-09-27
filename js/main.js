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

})();