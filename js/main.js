// Abrir o menu ao clicar
const selectElements = (s) => document.querySelector(s);
selectElements('.dark').addEventListener('click', () => {
    selectElements('body').classList.add('dark-mode-body');
    selectElements('header').classList.add('dark-mode-header');
    selectElements('.mode i').classList.add('dark-mode-header-mode');
    selectElements('.user i').classList.add('dark-mode-header-user');
    selectElements('div').classList.remove('.dark');

    selectElements('.projects-menu').classList.add('dark-mode-header-menu-div');
    selectElements('.projects-menu').classList.remove('off');

    selectElements('.blog-menu').classList.add('dark-mode-header-menu-div');
    selectElements('.blog-menu').classList.remove('off');

    selectElements('.contact-menu').classList.add('dark-mode-header-menu-div');
    selectElements('.contact-menu').classList.remove('off');


    selectElements('.curriculum-menu').classList.add('dark-mode-header-menu-div');
    selectElements('.curriculum-menu').classList.remove('off');


    selectElements('.dark').classList.remove('dark-on');
    selectElements('.dark').classList.add('dark-off');
    selectElements('.sun').classList.add('sun-on');
    selectElements('.sun').classList.remove('sun-off');
});

selectElements('.sun').addEventListener('click', () => {
    selectElements('body').classList.remove('dark-mode-body');
    selectElements('header').classList.remove('dark-mode-header');
    selectElements('.dark').classList.add('dark-on');
    selectElements('.dark').classList.remove('dark-off');
    selectElements('.sun').classList.remove('sun-on');
    selectElements('.sun').classList.add('sun-off');

    selectElements('.projects-menu').classList.remove('dark-mode-header-menu-div');
    selectElements('.projects-menu').classList.add('off');
    selectElements('.blog-menu').classList.remove('dark-mode-header-menu-div');
    selectElements('.blog-menu').classList.add('off');
    selectElements('.contact-menu').classList.remove('dark-mode-header-menu-div');
    selectElements('.contact-menu').classList.add('off');
    selectElements('.curriculum-menu').classList.remove('dark-mode-header-menu-div');
    selectElements('.curriculum-menu').classList.add('off');
});
// Abrir o menu ao clicar

function calculateYears() {
    var year = new Date();
    var age = year.getFullYear() - 2018;

    var spanYears = document.querySelector('span.years');
    spanYears.append(age);
}

calculateYears();


function loadingDiv($value) {
    const mainMenu = document.getElementsByClassName('user')[0];
    const projectsMenu = document.getElementsByClassName('projects-menu')[0];
    const blogMenu = document.getElementsByClassName('blog-menu')[0];
    const contactMenu = document.getElementsByClassName('contact-menu')[0];
    const curriculumMenu = document.getElementsByClassName('curriculum-menu')[0];

    const mainDiv = document.getElementsByClassName('main')[0];
    const projectsDiv = document.getElementsByClassName('projects')[0];
    const blogDiv = document.getElementsByClassName('blog')[0];
    const contactDiv = document.getElementsByClassName('contact')[0];
    const curriculumDiv = document.getElementsByClassName('curriculum')[0];

    if($value === 'main'){
        mainDiv.style.display = 'flex';
        projectsDiv.style.display = 'none';
        blogDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        curriculumDiv.style.display = 'none';

      /*   mainMenu.style.color = 'initial';
        projectsMenu.style.color = 'initial';
        contactDiv.style.color = 'initial';
        curriculumDiv.style.color = 'initial'; */
    }
    else if($value === 'projects'){
        mainDiv.style.display = 'none';
        projectsDiv.style.display = 'flex';
        blogDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        curriculumDiv.style.display = 'none';

    /*     mainMenu.style.color = 'initial';
        projectsMenu.style.color = 'initial';
        contactDiv.style.color = 'initial';
        curriculumDiv.style.color = 'initial'; */
    }
    else if($value === 'blog'){
        mainDiv.style.display = 'none';
        projectsDiv.style.display = 'none';
        blogDiv.style.display = 'flex';
        contactDiv.style.display = 'none';
        curriculumDiv.style.display = 'none';

    /*     mainMenu.style.color = 'initial';
        projectsMenu.style.color = 'initial';
        contactDiv.style.color = 'initial';
        curriculumDiv.style.color = 'initial'; */
    }
    else if($value === 'contact'){
        mainDiv.style.display = 'none';
        projectsDiv.style.display = 'none';
        blogDiv.style.display = 'none';
        contactDiv.style.display = 'flex';
        curriculumDiv.style.display = 'none';

      /*   mainMenu.style.color = 'initial';
        projectsMenu.style.color = 'initial';
        contactDiv.style.color = 'initial';
        curriculumDiv.style.color = 'initial'; */
    }
    else if($value === 'curriculum'){
        mainDiv.style.display = 'none';
        projectsDiv.style.display = 'none';
        blogDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        curriculumDiv.style.display = 'flex';

       /*  mainMenu.style.color = 'initial';
        projectsMenu.style.color = 'initial';
        contactDiv.style.color = 'initial';
        curriculumDiv.style.color = 'initial'; */
    }
}

