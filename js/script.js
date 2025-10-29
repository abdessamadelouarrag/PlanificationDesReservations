
//code js for pop up form

//all i need to select model and closed
const open = document.querySelectorAll('.openModel');
const popup = document.querySelector('.model')
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

