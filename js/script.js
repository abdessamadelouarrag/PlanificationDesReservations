
//code js for pop up form

//all i need to select model and closed
const open = document.querySelectorAll('.openModel');
const popup = document.querySelector('.all-popup')
const close = document.querySelectorAll('.closed');
const cards =document.querySelectorAll(".box")









// for open form (model) and add class show for show the form
// open.forEach(i => {
//     i.addEventListener('click', (e) => {
//         popup.classList.add('show');

//     });
// });

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


const reS = document.getElementsByClassName('box');
const addReservation = document.getElementById('addR');


// addReservation.addEventListener('click' ,() => {
//     const valeuREs = inputName.value;
//     reS.innerHTML = `<div>${valeuREs}</div>`;
// });

// const reServ = document.getElementById('name').value;

const formInput = document.getElementById('formSub');

function addInDays(infoUser) {
    const allDays = document.getElementsByClassName('box');
   
    const cDiv = document.createElement('div');
  cDiv.innerHTML = `<h4>${infoUser.Name}</h4> <p>${infoUser.start} ${infoUser.end} </p>`;
  document.querySelector('.box').append(cDiv);
}

formInput.addEventListener('submit', function (e) {
  e.preventDefault();

  const infoUser = {
    Name: document.getElementById('name').value,
    start: document.getElementById('start').value,
    end: document.getElementById('end').value,
    num: document.getElementById('num').value,
    type: document.getElementById('type').value,
  };

//   addInDays(infoUser);

  popup.classList.remove('show');
//   console.log(infoUser);


});




// show popop in card


let name = document.getElementById('name');


  let infoUser = {
    Name: name.value
    // start: document.getElementById('start').value,
    // end: document.getElementById('end').value,
    // num: document.getElementById('num').value,
    // type: document.getElementById('type').value,
  };



  cards.forEach(card =>{
    
    
    card.addEventListener("click" , (e)=>{
        
        
        
        if(e.target.classList.contains("week")){
            return ;
        }
        
        popup.classList.add("show");


       
        
     
      document.getElementById("addR").addEventListener("click" , ()=>{
         
       
        let info = `<p>${name.value}</p>`




        card.innerHTML += info



        
        
    
      })
        
     
      

        
        
    })
})
