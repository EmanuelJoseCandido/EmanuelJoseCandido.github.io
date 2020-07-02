const selectElements = (s) => document.querySelector(s);

// Abrir o menu ao clicar

selectElements('.dark').addEventListener('click', () => {
    selectElements('body').classList.add('dark-mode-body');
    selectElements('header').classList.add('dark-mode-header');
    selectElements('.mode i').classList.add('dark-mode-header-mode');
    selectElements('.user i').classList.add('dark-mode-header-user');
    selectElements('.user i').classList.add('dark-mode-header-user');
    selectElements('div').classList.remove('.dark');
});

selectElements('.sun').addEventListener('click', () => {
    selectElements('body').classList.remove('dark-mode-body');
    selectElements('header').classList.remove('dark-mode-header');
});


function calculateYears() {
    var year = new Date();
    var age = year.getFullYear() - 2018;

    var spanYears = document.querySelector('span.years');
    spanYears.append(age);
}

calculateYears();

