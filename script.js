function addTask() {
        const taskInput = document.getElementById('task').value;
        const descriptionInput = document.getElementById('description').value;
        if (taskInput.trim() === '' || descriptionInput.trim() === '') {
                alert('Please enter both task and description.');
                return;
        }
        const taskContainer = document.getElementById('card');
        const taskCard = document.createElement('div');
        taskCard.className = 'container'
        taskCard.style.border = ' solid aliceblue 2px';
        taskCard.style.borderRadius = '5px';
        taskCard.style.padding = ' 0.5vw';
        taskCard.style.margin = '5vh 2vw';
        taskCard.style.height = '40vh'
        taskCard.style.width = '30vh';
        taskCard.style.display = 'flex';
        taskCard.style.flexDirection = 'flex-start';
        taskCard.style.backgroundColor = 'antiquewhite';
        taskCard.innerHTML = `
                <button type="button" onClick="this.parentElement.remove()" class="removeButton">x</button>
                <h2>${taskInput}</h2>
                <p>${descriptionInput}</p>
            `;
        taskContainer.appendChild(taskCard);
        document.getElementById('task').value = '';
        document.getElementById('description').value = '';
        localStorage.setItem(taskInput, descriptionInput);

}