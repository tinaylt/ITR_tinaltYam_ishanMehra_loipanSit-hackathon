(() => {

//mobile menu//
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const lines = document.querySelectorAll('.line');


//Video player//
const playerCon = document.querySelector('#player-container');
const player = document.querySelector('#player-container video');
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

//Photo Gallery Mobile//

const mobImage1 = document.getElementById('mob-img1');
const mobImage2 = document.getElementById('mob-img2');
const mobGalleryItems = document.querySelectorAll('#mobile-photos li');

//Photo Gallery Tablet//

const tabImage1 = document.getElementById('tablet-img1');
const tabImage2 = document.getElementById('tablet-img2');
const tabImage3 = document.getElementById('tablet-img3');
const tabImage4 = document.getElementById('tablet-img4');
const tabImage5 = document.getElementById('tablet-img5');
const tabImage6 = document.getElementById('tablet-img6');
const tabGalleryItems = document.querySelectorAll('#tablet-photos li');



//Developers arrey//
const developers = [
  {
   devName: "Roy",
   devImage: "images/dev1.png",
   description: "Raise awareness and donations for the construction and installation of a stone memorial depicting scenes from joint battles fought by Indian and Canadian soldiers. Ensure the sacrifices of these soldiers are remembered and honored. &nbsp; Inspire future generations with the values of humanity and freedom through the commemoration of this shared history."
  },

  {
    devName: "Tina",
    devImage: "images/dev3.png",
    description: "I graduated from Fanshawe College with a focus on Interactive Media. I have a passion for both design and coding, and I've worked on various video and graphic design projects. &nbsp; Outside of work, I love exploring new places and learning something new whenever I can. It's exciting to bring creativity and technical skills together, and I'm always eager to take on new challenges"
   },
 
   {
    devName: "Ishan",
    devImage: "images/dev2.png",
    description: "Raise awareness and donations for the construction and installation of a stone memorial depicting scenes from joint battles fought by Indian and Canadian soldiers. Ensure the sacrifices of these soldiers are remembered and honored. &nbsp; Inspire future generations with the values of humanity and freedom through the commemoration of this shared history."
   },
];


//Portfolio//

const students = [
  {
    lastName: "Rodriguez-Ramos",
    firstName: "Diego",
  },

  {
    lastName: "Cooper",
    firstName: "Kayla"
  },

  {
    lastName: "Lozon",
    firstName: "Ramona"
  },

  {
    lastName: "Chen",
    firstName: "Qingdong"
  },

  {
    lastName: "Khan",
    firstName: "Taylor"
  },

  {
    lastName: "Pelacek-Boutilier",
    firstName: "Cassidy"
  },

  {
    lastName: "Bilyea",
    firstName: "Isaac"
  },
  
  {
    lastName: "Carriere",
    firstName: "Ezra"
  },

  {
    lastName: "Salwan",
    firstName: "Shauraya"
  },

  {
    lastName: "Reji-Vazhavilayil",
    firstName: "Rebin"
  },

  {
    lastName: "Saddul",
    firstName: "Divij"
  },

  {
    lastName: "Park",
    firstName: "Kyuri"
  },

  {
    lastName: "Meijer",
    firstName: "Nikolai"
  },

  {
    lastName: "Hanbury",
    firstName: "Xaviere"
  },

  {
    lastName: "Buck",
    firstName: "Amari"
  },

  {
    lastName: "Sivaskaran",
    firstName: "Thaseekaran"
  },

  {
    lastName: "Parmar",
    firstName: "Meet-Amrutbhai"
  },

  {
    lastName: "Reyes",
    firstName: "Justin-Rian"
  },

  {
    lastName: "Yantizhanov",
    firstName: "Alisher"
  },

  {
    lastName: "Thakur",
    firstName: "Parvesh"
  },

  {
    lastName: "Damen",
    firstName: "Meghan"
  },

  {
    lastName: "Zhang",
    firstName: "Bozhi"
  },

  {
    lastName: "Chu",
    firstName: "Qiao-Yi"
  },

  {
    lastName: "Maxwell",
    firstName: "Sashoye"
  },

  {
    lastName: "Bondarchuk",
    firstName: "Dina"
  },

  {
    lastName: "Okutepa",
    firstName: "Wisdom-Utenwojo"
  },

  {
    lastName: "Macapagal",
    firstName: "Bernardo-Jr."
  },

  {
    lastName: "Celis",
    firstName: "Ezekiel-John"
  },

  {
    lastName: "Macadams",
    firstName: "Katrina"
  },

  {
    lastName: "El Maniary",
    firstName: "Ali"
  },

  {
    lastName: "Yam",
    firstName: "LokTingTina"
  },

  {
    lastName: "Nguyen",
    firstName: "Thi-Thanh-Thuong"
  },

  {
    lastName: "Quelali-Evangelista",
    firstName: "Jenifer"
  },

  {
    lastName: "Nobre-Do-Nascimento",
    firstName: "Rodrigo"
  },

  {
    lastName: "Gabbassova",
    firstName: "Milana"
  },

  {
    lastName: "Cardenas-Ramos",
    firstName: "Izel-Esteban"
  },

  {
    lastName: "Flores",
    firstName: "Timothy-Bryle"
  },

  {
    lastName: "Sit",
    firstName: "Loi-Pan"
  },

  {
    lastName: "Polchai",
    firstName: "Napas"
  },

  {
    lastName: "Singh",
    firstName: "Akamjot"
  },

  {
    lastName: "Opadele",
    firstName: "Emmanuel"
  },

  {
    lastName: "Sojan",
    firstName: "Shon"
  },

  {
    lastName: "Ishan",
    firstName: "Mehra"
  },

  {
    lastName: "Biju-Varghese",
    firstName: "Shiyon"
  },

  {
    lastName: "Jashan",
    firstName: "Kumar"
  },

  {
    lastName: "Dhaliwal",
    firstName: "Meetinder-Singh"
  },

  {
    lastName: "Harnoorpreet",
    firstName: "Kaur"
  },

  {
    lastName: "Juntarattanakamol",
    firstName: "Apapat"
  },

]
const studentBoxes = document.querySelectorAll('.student-box');



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
      document.webkitExitFullscreen();
    } else if (playerCon.webkitRequestFullscreen) {
        playerCon.webkitRequestFullscreen();
    } else {
        playerCon.requestFullscreen();
    }
}

function hideControls() {
    if (player.paused) {
      return;
    } 
    videoControls.classList.add('hide');
  }
  
  // showControls displays the video controls
  function showControls() {
    videoControls.classList.remove('hide');
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

//Portfolio//

studentBoxes.forEach(box => {
  // Get the student index from the data-student attribute
  const studentIndex = box.dataset.student;

  // Access the corresponding student from the students array
  const student = students[studentIndex];

  // Populate the student-box with the student's name and email
  box.innerHTML = `
    <h4>${student.firstName} ${student.lastName}</h4>
    <p>${student.firstName}.ca</p>`;
});



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

//Photo Gallery Mobile//

mobGalleryItems.forEach(item => {
  item.addEventListener('click', function() {
      const image1 = this.getAttribute('data-gallery1');
      const image2 = this.getAttribute('data-gallery2');
      
      mobImage1.src = image1;
      mobImage2.src = image2;
  });
});

//Tablet Gallery//

tabGalleryItems.forEach(item => {
  item.addEventListener('click', function() {
      const tImage1 = this.getAttribute('data-tablet-gallery1');
      const tImage2 = this.getAttribute('data-tablet-gallery2');
      const tImage3 = this.getAttribute('data-tablet-gallery3');
      const tImage4 = this.getAttribute('data-tablet-gallery4');
      const tImage5 = this.getAttribute('data-tablet-gallery5');
      const tImage6 = this.getAttribute('data-tablet-gallery6');
      
      tabImage1.src = tImage1;
      tabImage2.src = tImage2;
      tabImage3.src = tImage3;
      tabImage4.src = tImage4;
      tabImage5.src = tImage5;
      tabImage6.src = tImage6;
  });
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