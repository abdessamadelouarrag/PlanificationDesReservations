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
  btn.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.classList.contains("openModel"))
      popup.classList.add('show');
    else {
      return;
    }
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
    type: document.getElementById('type').value.toLowerCase(),
  };

  // get target day
  const targetDay = document.querySelector('.box.clicked');

  // Check if were editing (look for editing flag)
  if (popup.dataset.editing === 'true') {

    // Find and update the existing task
    const existingTask = document.querySelector('.task.editing');
    if (existingTask) {
      
      // Update the task content
      existingTask.innerHTML = `
        <strong>${infoUser.name}</strong><br>
        ${infoUser.start} - ${infoUser.end}<br>
        <button id="delet"><i class = "fas fa-trash-can"></i></button>
        <button id="edit"><i class = "fas fa-pen"></i></button>
      `;

      // Re-add event listeners
      addTaskEventListeners(existingTask, infoUser);
      
      // Update color
      applyTaskColor(existingTask, infoUser.type);
      
      // Remove editing class
      existingTask.classList.remove('editing');
    }
    
    // Clear editing flag
    delete popup.dataset.editing;
    
  } else {
    // Create new task (your original code)
    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
      <strong>${infoUser.name}</strong><br>
      ${infoUser.start} - ${infoUser.end}<br>
      <button id="delet"><i class = "fas fa-trash-can"></i></button>
      <button id="edit"><i class = "fas fa-pen"></i></button>
    `;

    // Add event listeners
    addTaskEventListeners(task, infoUser);

    // color by type
    applyTaskColor(task, infoUser.type);

    // Add styles
    task.style.color = 'white';
    task.style.padding = '6px';
    task.style.borderRadius = '6px';
    task.style.marginTop = '5px';
    task.style.fontSize = '14px';

    targetDay.appendChild(task);
  }

  // reset form and close popup
  form.reset();
  popup.classList.remove('show');
});

// Function to add event listeners to task
function addTaskEventListeners(task, infoUser) {
  // delete event
  task.querySelector('#delet').addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    task.remove();
  });

  // edit event - SIMPLIFIED EDIT PART
  task.querySelector('#edit').addEventListener('click', (e) => {
    e.stopPropagation();
    
    // Fill form with current values
    document.getElementById('name').value = infoUser.name;
    document.getElementById('start').value = infoUser.start;
    document.getElementById('end').value = infoUser.end;
    document.getElementById('num').value = infoUser.num;
    document.getElementById('type').value = infoUser.type;
    
    // Mark this task as being edited
    task.classList.add('editing');
    
    // Set editing flag
    popup.dataset.editing = 'true';
    
    // Open popup
    popup.classList.add('show');
  });

  // show info task in alert
  task.addEventListener('click', () => {
    task.innerHTML = (`
    <strong style="color: black;">Name : </strong> ${infoUser.name} <br>
    <strong style="color: black;">Start : </strong> ${infoUser.start}<br>
    <strong style="color: black;">End : </strong>${infoUser.end}<br>
    <strong style="color: black;">Person : </strong>${infoUser.num}<br>
    <strong style="color: black;">Type : </strong> ${infoUser.type} <br>
    <h6 style="color: rgba(163, 42, 12, 1)">Pour revenir à l'état initial, Double cliquez</h6>`);

    // show details of form
    task.addEventListener('dblclick', () => {
      task.innerHTML = `
      <strong>${infoUser.name}</strong><br>
      ${infoUser.start} - ${infoUser.end}<br>
      <button id="delet"><i class = "fas fa-trash-can"></i></button>
      <button id="edit"><i class = "fas fa-pen"></i></button>
      `;

      // Re-add event listeners after double click
      addTaskEventListeners(task, infoUser);
      applyTaskColor(task, infoUser.type);
    }, { once: true }); // Use once to prevent multiple listeners
  });
}

// Function to apply color
function applyTaskColor(task, type) {
  let color;
  switch (type) {
    case 'vip':
      color = '#9e7609';
      break;
    case 'sur-place':
      color = '#35a4b3ff';
      break;
    case 'anniversaire':
      color = '#9b59b6';
      break;
  }
  task.style.backgroundColor = color;
}

//BOX CLICK EFFECT
openButtons.forEach(box => {
  box.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(b => b.classList.remove('clicked'));
    box.classList.add('clicked');
  });
});