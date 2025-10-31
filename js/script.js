// HELP POPUP
const openHelp = document.querySelector('.iconehelp');
const helpBanner = document.querySelector('.help');
const closeHelp = document.querySelector('.closeHelp');

// open help
openHelp.addEventListener('click', () => {
  helpBanner.classList.add('showHelp');
});

// close help
closeHelp.addEventListener('click', () => {
  helpBanner.classList.remove('showHelp');
});

// FORM POPUP
const openButtons = document.querySelectorAll('.box');
const popup = document.querySelector('.all-popup');
const closeButtons = document.querySelectorAll('.closed');

// open form popup
openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.classList.add('show');
  });
});

// close form popup
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.classList.remove('show');
  });
});

// FORM SUBMIT
const form = document.getElementById('formSub');

form.addEventListener('submit', e => {
  e.preventDefault();

  const infoUser = {
    name: document.getElementById('name').value.trim(),
    start: document.getElementById('start').value,
    end: document.getElementById('end').value,
    num: document.getElementById('num').value,
    type: document.getElementById('type').value.trim().toLowerCase(),
  };

  // get target day
  const targetSelector = popup.dataset.targetDay ? `.box[data-day="${popup.dataset.targetDay}"]` : '.box.show-task-target';

  const targetDay = document.querySelector(targetSelector) || document.querySelector('.box.clicked');


  // create task
  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `
    <strong>${infoUser.name}</strong><br>
    ${infoUser.start} - ${infoUser.end}<br>
  `;
  task.addEventListener('click', () => {
    console.log(`Clicked task ID: ${task.dataset.id}`);
    alert(`
    name: ${infoUser.name} 
    start: ${infoUser.start} 
    end: ${infoUser.end}
    persone: ${infoUser.num}
    type: ${infoUser.type}`);
  });

  // color by type
  let color;
  switch (infoUser.type) {
    case 'vip':
      color = '#d4af37';
      break;
    case 'sur-place':
      color = '#eb6e1bff';
      break;
    case 'anniversaire':
      color = '#9b59b6';
  }

  task.style.backgroundColor = color;
  task.style.color = 'white';
  task.style.padding = '6px';
  task.style.borderRadius = '6px';
  task.style.marginTop = '5px';

  targetDay.appendChild(task);

  // reset form and close popup
  form.reset();
  popup.classList.remove('show');
  delete popup.dataset.targetDay;
});

//BOX CLICK EFFECT
openButtons.forEach(box => {
  box.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(b => b.classList.remove('clicked'));
    box.classList.add('clicked');
  });
});

