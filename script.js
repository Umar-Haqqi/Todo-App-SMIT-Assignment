document.addEventListener('DOMContentLoaded', function () {
    function addTask() {
        var inputValue = document.getElementById('inputValue').value;

        if (inputValue.trim() !== '') {
            var taskArea = document.querySelector('.task-area');

            var taskElement = document.createElement('div');
            taskElement.classList.add('task');

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            taskElement.appendChild(checkbox);

            var taskText = document.createElement('span');
            taskText.textContent = inputValue;
            taskElement.appendChild(taskText);

            var editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', function () {
                // Add edit functionality here
                var newText = prompt('Edit task:', taskText.textContent);
                if (newText !== null) {
                    taskText.textContent = newText;
                }
            });
            taskElement.appendChild(editButton);

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                // Add delete functionality here
                taskArea.removeChild(taskElement);
            });
            taskElement.appendChild(deleteButton);

            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    editButton.disabled = true;
                    deleteButton.disabled = true;
                    editButton.style.opacity = '0.6'
                    deleteButton.style.opacity = '0.6'
                } else {
                    editButton.disabled = false;
                    deleteButton.disabled = false;
                }
            });

            taskArea.appendChild(taskElement);
            document.getElementById('inputValue').value = '';
        }
    }

    document.getElementById('addTask').addEventListener('click', addTask);
    document.getElementById('inputValue').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});