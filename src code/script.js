const submitBtn = document.querySelector('#submit-btn');
const titleField = document.querySelector('#title');
const contentField = document.querySelector('#content');
const taskContainer = document.querySelector('#task-container');

submitBtn.addEventListener('click', () => {
    createTask();
    saveToLocalStorage();
});

function createTask() {
    const task = document.createElement('div');
    const title = document.createElement('h3'); // Changed from <p> to <h3> for better hierarchy
    const content = document.createElement('p');

    title.innerText = titleField.value;
    content.innerText = contentField.value;

    task.setAttribute('class', 'task');
    task.appendChild(title);
    task.appendChild(content);

    taskContainer.appendChild(task);

    titleField.value = ''; // Clearing the input fields after adding the task
    contentField.value = '';

    console.log(titleField.value);
    console.log(contentField.value);
}

function saveToLocalStorage() {
    // Saving to local storage can be customized according to your requirements
    // Here, I'm just storing the task content for simplicity
    const tasks = document.querySelectorAll('.task');
    const taskData = [];

    tasks.forEach(task => {
        const title = task.querySelector('h3').innerText;
        const content = task.querySelector('p').innerText;
        taskData.push({ title, content });
    });

    localStorage.setItem('tasks', JSON.stringify(taskData));
}

function getFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        const taskData = JSON.parse(storedTasks);

        taskData.forEach(data => {
            const task = document.createElement('div');
            const title = document.createElement('h3');
            const content = document.createElement('p');

            title.innerText = data.title;
            content.innerText = data.content;

            task.setAttribute('class', 'task');
            task.appendChild(title);
            task.appendChild(content);

            taskContainer.appendChild(task);
        });
    }
}


function deleteNode() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.addEventListener('click', function(e) {
            this.remove();
            saveToLocalStorage();
            e.stopPropagation();
        });
    });
}

// Load tasks from localStorage if available
getFromLocalStorage();