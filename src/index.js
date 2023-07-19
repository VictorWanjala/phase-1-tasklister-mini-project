document.addEventListener("DOMContentLoaded", function() {
  const inputBox = document.getElementById('new-task-description');
  const listContainer = document.getElementById('tasks');

  function addTask() {
    if (inputBox.value === '') {
      alert('You must write something!');
    } else {
      let li = document.createElement('li');
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement('span');
      span.innerHTML = '\u00d7';
      li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
  }

  listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  }, false);

  function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
  }

  function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
  }

  showTask();

  const addTaskForm = document.getElementById('create-task-form');
  addTaskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
  });
});
