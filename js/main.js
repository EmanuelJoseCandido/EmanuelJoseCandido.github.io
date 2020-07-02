const selectElements = (s) => document.querySelector(s);

// Abrir o menu ao clicar

selectElements('.dark').addEventListener('click', () => {
    selectElements('body').classList.add('dark-mode-body');
    selectElements('header').classList.add('dark-mode-header');
    selectElements('.mode i').classList.add('dark-mode-header-mode');
    selectElements('.user i').classList.add('dark-mode-header-user');
    selectElements('div').classList.remove('.dark');
    selectElements('.off').classList.add('dark-mode-header-menu-div');
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
});


function calculateYears() {
    var year = new Date();
    var age = year.getFullYear() - 2018;

    var spanYears = document.querySelector('span.years');
    spanYears.append(age);
}

calculateYears();

