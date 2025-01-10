function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);
  
    text_speak.rate = 2;
    text_speak.volume = 1;
    text_speak.pitch = 1;
  
    window.speechSynthesis.speak(text_speak);
  }


  function wishMe(){
    var day = new Date();
    var hour = day.getHours();
  
    if(hour>=0 && hour<12){
        speak("hello homosapien.......... Good Morning ...")
    }
  
    else if(hour>12 && hour<17){
        speak("hello homosapien.......... Good Afternoon...")
    }
  
    else{
        speak("hello homosapien.......... Good Evenining ...")
           
    }
  
  }
  
  window.addEventListener('load', ()=>{
    wishMe();
    speak("Welcome to our BIOMUTANTZ symposium");
  });

  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none'; 
    }, 3000); 
});


/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
            .discover__container,
            .experience__data, .experience__overlay,
            .place__card,
            .sponsor__content,
            .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
            .video__description,
            .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
            .video__content,
            .subscribe__form`,{
    origin: 'right',
    interval: 100,
})

$(document).ready(function(){
    $('.card-container').click(function(){
        $(this).toggleClass("spread");
    });
});


const themeButton = document.getElementById('theme-button');
const selectedTheme = localStorage.getItem('selected-theme');
const darkTheme = 'dark';
const iconTheme = 'ri-sun-line';

  // Validate if the user previously chose a theme
if (selectedTheme) {
    document.body.setAttribute('data-theme', selectedTheme);
        if (selectedTheme === darkTheme) {
            themeButton.classList.add(iconTheme);
        }
}

  // Activate/Deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === darkTheme) {
            document.body.setAttribute('data-theme', 'light');
            themeButton.classList.remove(iconTheme);
            localStorage.setItem('selected-theme', 'light');
        } else {
            document.body.setAttribute('data-theme', darkTheme);
            themeButton.classList.add(iconTheme);
            localStorage.setItem('selected-theme', darkTheme);
        }
    });
  




