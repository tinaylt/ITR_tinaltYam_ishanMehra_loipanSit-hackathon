(() => {

//Mobile Menu//
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
    webDeveloper: "Jasmine Chicoine",
    graphicDesigner: "Deviano Dames",
    videoDesigner: "Spencer Abbot",
    motionDesigner: "Shih-Hsuan Huang"
  },

  {
    label: "FINALIST - 2",
    winner: "images/place-holder2.png",
    webDeveloper: "Patricia Martins",
    graphicDesigner: "Loui Hernandez",
    videoDesigner: "Valentina Perez",
    motionDesigner: "Sumin Lee"
  },

  {
    label: "FINALIST - 3",
    winner: "images/place-holder3.png",
    webDeveloper: "Delilah Singer",
    graphicDesigner: "Sophia Westrop",
    videoDesigner: "Suyog Ghimire",
    motionDesigner: "Bryan Hortua"
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
   description: "With a solid educational foundation in fashion and graphic design in the UK, and several years of experience working with international brands, I have honed my expertise in creating innovative and market-leading designs. Currently expanding my skill set by studying Interactive Media Design to blend fashion and technology with a unique specialisation in website design, and motion graphic for fashion brands."
  },

  {
    devName: "Tina",
    devImage: "images/dev3.png",
    description: "I graduated from Fanshawe College with a focus on Interactive Media. I have a passion for both design and coding, and I've worked on various video and graphic design projects. &nbsp; Outside of work, I love exploring new places and learning something new whenever I can. It's exciting to bring creativity and technical skills together, and I'm always eager to take on new challenges"
   },
 
   {
    devName: "Ishan",
    devImage: "images/dev2.png",
    description: "I am an Interactive Media Design student passionate about creativity and technology. With skills in motion graphics, Coding, video editing, and graphic design, I aspire to become a Web developer.<br><br>As someone who is a little introverted, I appreciate meaningful connections and enjoy reading, exploring nature, and engaging with new people at my own pace. I believe in the power of empathy, respect, and care, which I bring to my work and relationships. With big dreams ahead, I'm excited about my journey of personal and professional growth, and I look forward to making an impact in the creative world!"
   },
];

//Testimonial// 
const clients = [
  {
    fName: "Aimee",
    lName: "Hagerty",
    comment: "These amazing students bring fresh perspectives and innovative ideas to the table. Their dedication to the project is truly inspiring."
  },

  {
    fName: "Bill",
    lName: "Hagerty",
    comment: "It's been incredible to work alongside these talented students. Their passion and dedication reaffirm our commitment to supporting youth mental health."
  },

  {
    fName: "Marco",
    lName: "De Luca",
    comment: "Observing the students collaborating with Foundation Sixty6 has been an inspiring journey. The creativity and skill displayed by the students have been truly outstanding."
  },

  {
    fName: "Mary",
    lName: "Portman",
    comment: "Happy to work with creative and inspiraing students during the project. Learn a lot and having lots of fun!"
  },

]

const testimonialBlocks = document.querySelectorAll('.testimonial-box');



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

  {
    lastName: "Bandarra",
    firstName: "Sydney"
  },

  {
    lastName: "Ogbeide",
    firstName: "Osarieme"
  },

  {
    lastName: "Huertas",
    firstName: "Tanya-Mae"
  },

  {
    lastName: "Cano-Menendez",
    firstName: "Tanya-Mae"
  },

  {
    lastName: "Bishokarma",
    firstName: "Kamana"
  },

  {
    lastName: "Sham",
    firstName: "King-Yin"
  },

  {
    lastName: "Benipal",
    firstName: "Tapshveer"
  },

  {
    lastName: "Laput",
    firstName: "Dixie-Marie"
  },

  {
    lastName: "Faizan-Khan",
    firstName: ""
  },

  {
    lastName: "Lie",
    firstName: "Keith"
  },

  {
    lastName: "Gamborgi-Menezes",
    firstName: "Henrique"
  },

  {
    lastName: "Mahaittidon",
    firstName: "Natchanon"
  },

  {
    lastName: "Chan",
    firstName: "Wing-Lam-Stephanie"
  },

  {
    lastName: "Lai",
    firstName: "Yi-Ting"
  },

  {
    lastName: "Gohetia",
    firstName: "Sheldon"
  },

  {
    lastName: "Gregory",
    firstName: "Joyal"
  },

  {
    lastName: "Sidhu",
    firstName: "Sukhbhag-Singh"
  },

  {
    lastName: "Shah",
    firstName: "Het"
  },

  {
    lastName: "Patel",
    firstName: "Lav-Pareshkumar"
  },

  {
    lastName: "Dasilva",
    firstName: "Simon"
  },

  {
    lastName: "",
    firstName: "Wimarsha-Heshan-Jayasinghe"
  },

  {
    lastName: "Ho",
    firstName: "Gia-Khang"
  },

  {
    lastName: "Bendzsel",
    firstName: "Kristina"
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
};

//Testimonials//

testimonialBlocks.forEach(block => {
  const testimonialSection = block.dataset.review;
  const testimonial = clients[testimonialSection];

  block.innerHTML = `
  <h3>${testimonial.fName} ${testimonial.lName}</h3>
  <p>${testimonial.comment}</p>`;
});

//Portfolio//

studentBoxes.forEach(box => {
  const studentIndex = box.dataset.student;
  const student = students[studentIndex];

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