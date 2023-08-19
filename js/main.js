const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', function() {
    document.body.classList.toggle('mobile-menu-active')
})


window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
        document.body.classList.remove('mobile-menu-active');
    }
});


const modeBtn = document.querySelector('#mode-btn')
const bodyElement = document.body

const whatsApp = document.querySelector('#whatsapp');
const lightWhatsAppIcon = './img/ico-whatsapp-negro.png';
const darkWhatsAppIcon = './img/ico-whatsapp-blanco.png';
const colorWhatsAppIcon = './img/ico-whatsapp-color.png';

const gitHub = document.querySelector('#github');
const lightGithubIcon = './img/ico-github-negro.png';
const darkGithubIcon = './img/ico-github-blanco.png';
const colorGithubIcon = './img/ico-github-color.png';

const linkedIn = document.querySelector('#linkedin');
const lightlinkedInIcon = './img/ico-linkedin-negro.png';
const darklinkedInIcon = './img/ico-linkedin-blanco.png';
const colorlinkedInIcon = './img/ico-linkedin-color.png';

const cV = document.querySelector('#cv');
const lightcVIcon = './img/ico-cv-negro.png';
const darkcVIcon = './img/ico-cv-blanco.png';
const colorcVIcon = './img/ico-cv-color.png';

modeBtn.addEventListener('click', function () {
    const temaActual = bodyElement.getAttribute("data-bs-theme");
    const nuevoTema = temaActual === "light" ? "dark" : "light";

    const modeButtons = document.querySelectorAll('.btn');
    modeButtons.forEach(button => {
        button.classList.toggle('btn-dark', nuevoTema === 'dark');
        button.classList.toggle('btn-light', nuevoTema === 'light');
    });

    const cardHeader = document.querySelectorAll('.card-header');
    cardHeader.forEach(h5 => {
        h5.classList.toggle('bg-dark', nuevoTema === 'dark');
        h5.classList.toggle('bg-success', nuevoTema === 'light');
    });

    if (nuevoTema === "light") {
        whatsApp.querySelector('img').src = lightWhatsAppIcon;
        gitHub.querySelector('img').src = lightGithubIcon;
        linkedIn.querySelector('img').src = lightlinkedInIcon;
        cV.querySelector('img').src = lightcVIcon;
    } else if (nuevoTema === "dark") {
        whatsApp.querySelector('img').src = darkWhatsAppIcon;
        gitHub.querySelector('img').src = darkGithubIcon;
        linkedIn.querySelector('img').src = darklinkedInIcon;
        cV.querySelector('img').src = darkcVIcon;
    }

    document.body.classList.toggle('mode-active');
    bodyElement.setAttribute("data-bs-theme", nuevoTema);
})


const whatsapp = document.querySelector('#whatsapp')
const github = document.querySelector('#github')
const linkedin = document.querySelector('#linkedin')
const cv = document.querySelector('#cv')

whatsapp.addEventListener('mouseover', function () {
    const temaActual = document.body.getAttribute("data-bs-theme");

    if (temaActual === "light") {
        whatsapp.querySelector('img').src = colorWhatsAppIcon;
    } else if (temaActual === "dark") {
        whatsapp.querySelector('img').src = colorWhatsAppIcon;
    }
});

whatsapp.addEventListener('mouseout', function () {
    const temaActual = document.body.getAttribute("data-bs-theme");

    if (temaActual === "light") {
        whatsapp.querySelector('img').src = lightWhatsAppIcon;
    } else if (temaActual === "dark") {
        whatsapp.querySelector('img').src = darkWhatsAppIcon;
    }
});

github.addEventListener('mouseover', function () {
    const temaActual = document.body.getAttribute("data-bs-theme");

    if (temaActual === "light") {
        github.querySelector('img').src = colorGithubIcon;
    } else if (temaActual === "dark") {
        github.querySelector('img').src = colorGithubIcon;
    }
});

github.addEventListener('mouseout', function () {
    const temaActual = document.body.getAttribute("data-bs-theme");

    if (temaActual === "light") {
        github.querySelector('img').src = lightGithubIcon;
    } else if (temaActual === "dark") {
        github.querySelector('img').src = darkGithubIcon;
    }
});

linkedin.addEventListener('mouseover', function () {
    const temaActual = document.body.getAttribute("data-bs-theme");

    if (temaActual === "light") {
        linkedin.querySelector('img').src = colorlinkedInIcon;
    } else if (temaActual === "dark") {
        linkedin.querySelector('img').src = colorlinkedInIcon;
    }
});

linkedin.addEventListener('mouseout', function () {
    const temaActual = document.body.getAttribute("data-bs-theme");

    if (temaActual === "light") {
        linkedin.querySelector('img').src = lightlinkedInIcon;
    } else if (temaActual === "dark") {
        linkedin.querySelector('img').src = darklinkedInIcon;
    }
});

cv.addEventListener('mouseover', function () {
    const temaActual = document.body.getAttribute("data-bs-theme");

    if (temaActual === "light") {
        cv.querySelector('img').src = colorcVIcon;
    } else if (temaActual === "dark") {
        cv.querySelector('img').src = colorcVIcon;
    }
});

cv.addEventListener('mouseout', function () {
    const temaActual = document.body.getAttribute("data-bs-theme");

    if (temaActual === "light") {
        cv.querySelector('img').src = lightcVIcon;
    } else if (temaActual === "dark") {
        cv.querySelector('img').src = darkcVIcon;
    }
});


const langBtn = document.querySelector('#lang-btn')
const langBtnText = document.querySelector('#lang-btn-text')

langBtn.addEventListener('click', function(){
    let changeLang = langBtn.checked
    if (changeLang == true) {
        location.href = 'eng/index.html';
    }
    else {
        location.href = '../index.html';
    }

})


const header_list = document.querySelectorAll('.header-list')

header_list.forEach(function (element) {
    element.addEventListener('mouseover', function (e) {
        e.target.classList.add('css-header-list');
    });
    element.addEventListener('mouseout', function (e) {
        e.target.classList.remove('css-header-list');
    });
});


const backgroungBody = document.querySelector('body')
const contHeader = document.querySelector('header')
const inicioCont = document.querySelector('#home')
const aboutMeSection = document.querySelector('#aboutme-section')
const aboutMeButton = document.querySelector('#button-aboutme1');
const skillsButton = document.querySelector('#button-skills1');
const certificatesButton = document.querySelector('#button-certificates');
const aboutMeCard = document.querySelector('#aboutme-card');
const skillsCard = document.querySelector('#skills-card');
const certificatesCard = document.querySelector('#certificates-card');

aboutMeButton.addEventListener('click', function () {
    aboutMeCard.classList.add('active');
    aboutMeSection.classList.add('d-none');
    inicioCont.classList.add('d-none');
    backgroungBody.classList.add('cards');
    contHeader.classList.add('d-none');
});

skillsButton.addEventListener('click', function () {
    skillsCard.classList.add('active');
    aboutMeSection.classList.add('d-none');
    inicioCont.classList.add('d-none');
    backgroungBody.classList.add('cards');
    contHeader.classList.add('d-none');
});

certificatesButton.addEventListener('click', function () {
    certificatesCard.classList.add('active');
    aboutMeSection.classList.add('d-none');
    inicioCont.classList.add('d-none');
    backgroungBody.classList.add('cards');
    contHeader.classList.add('d-none');
});

const backButton = document.querySelectorAll('.back-button');

backButton.forEach(function (element) {
    element.addEventListener('click', function () {
        aboutMeCard.classList.remove('active');
        skillsCard.classList.remove('active');
        certificatesCard.classList.remove('active');
        aboutMeSection.classList.remove('d-none');
        inicioCont.classList.remove('d-none');
        backgroungBody.classList.remove('cards');
        contHeader.classList.remove('d-none');
    });
});