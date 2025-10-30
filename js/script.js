
//code js for pop up form

//all i need to select model and closed
const open = document.querySelectorAll('.openModel');
const popup = document.querySelector('.all-popup')
const close = document.querySelectorAll('.closed');

// for open form (model) and add class show for show the form
open.forEach(i => {
    i.addEventListener('click', () => {
        popup.classList.add('show');
    });
});

// for close form (model) and remove the class show - back to orignal style of model (opacity 0)

close.forEach(i => {
    i.addEventListener('click', () => {
        popup.classList.remove('show');
    });
});


//pop up help (what is the color ?)
const openHelp = document.querySelector('.iconehelp');
const helpBanner = document.querySelector('.help');
const closeHelp = document.querySelector('.closeHelp');

//open banner help
openHelp.addEventListener('click', () => {
    helpBanner.classList.add('showHelp');
});


//close banner help
closeHelp.addEventListener('click', () => {
    helpBanner.classList.remove('showHelp');
})


const formReserv = document.getElementsByTagName('form');
const addReservation = document.getElementById('addR');


addReservation.addEventListener('click' ,() => {
    const valeuREs = formReserv.value;
    const creEl = document.createElement('div');

    creEl.innerHTML = valeuREs;
});