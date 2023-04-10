/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/* ----- dark mode and light mode ----*/

const themeBtn = document.querySelector('[data-theme-btn]');
const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');
const body = document.querySelector('body');
const form = document.querySelector('.contact-form');
const inputFields = document.querySelectorAll('.input-wrapper input, .input-wrapper textarea');
const submitBtn = document.querySelector('.btn');

// Check local storage for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  form.classList.add(`${savedTheme}-mode`);
  inputFields.forEach(input => input.classList.add(`${savedTheme}-mode`));
  submitBtn.classList.add(`${savedTheme}-mode`);

  if (savedTheme === 'dark') {
    themeBtn.setAttribute('data-theme', 'dark');
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
  } else {
    themeBtn.setAttribute('data-theme', 'light');
    lightIcon.style.display = 'block';
    darkIcon.style.display = 'none';
  }
}

themeBtn.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    form.classList.remove('dark-mode');
    inputFields.forEach(input => input.classList.remove('dark-mode'));
    submitBtn.classList.remove('dark-mode');
    themeBtn.setAttribute('data-theme', 'light');
    lightIcon.style.display = 'block';
    darkIcon.style.display = 'none';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark');
    form.classList.add('dark-mode');
    inputFields.forEach(input => input.classList.add('dark-mode'));
    submitBtn.classList.add('dark-mode');
    themeBtn.setAttribute('data-theme', 'dark');
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
    localStorage.setItem('theme', 'dark');
  }
});
