function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a valid task.');
        return;
    }

    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        toggleTask(checkbox);
    });
    li.appendChild(checkbox);

    var span = document.createElement('span');
    span.appendChild(document.createTextNode(taskInput.value));
    li.appendChild(span);

    taskList.appendChild(li);

    taskInput.value = ''; 
}

function toggleTask(checkbox) {
    var listItem = checkbox.parentNode;
    listItem.classList.toggle('completed', checkbox.checked);
}