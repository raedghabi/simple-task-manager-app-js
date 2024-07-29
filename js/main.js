



document.addEventListener('DOMContentLoaded',() => {
    let remoBtn = document.getElementById('remove-task');
    let addBtn = document.getElementById('add-task');

    function creatTaskElements(taskContent) {

        let holder = document.querySelector('.task-holder');
        let task = document.createElement("span");
        let remoBtn = document.createElement('button');

        // creating the task 
        task.id = 'task';
        task.innerHTML = taskContent;
        
        // createing the remove button 
        remoBtn.style.display ='block';
        remoBtn.innerHTML = 'remove';
        remoBtn.id = "remove-task"
        remoBtn.addEventListener('click', removeTask)

        // appending the elements to the task holder
        holder.appendChild(task);
        holder.appendChild(remoBtn)
        
        
    }
    
    function addTask(event) {
        let input = document.getElementById('input').value;
        event.preventDefault(); 
        if (input.length != 0) {
            creatTaskElements(input);
            // saving the tasks in the localStorage
            let tasks = JSON.parse(localStorage.getItem('tasks') ) || [];
            tasks.push(input);
            localStorage.setItem('tasks',JSON.stringify(tasks) ) || [];

        } else {
            alert('input is empty');
        }
        // resest the ipnut value to empty after adding the task 
        document.getElementById('input').value = '';
    }

    // remove task from both document and localstorge 
    function removeTask() {
        let holder = document.querySelector('.task-holder');
        let task = document.getElementById('task');
        let remoBtn = document.getElementById('remove-task');
        // if task and the reomve button if it is existing
        if (task && remoBtn){
            
            holder.removeChild(task);
            holder.removeChild(remoBtn);
        };
        // remove the task from localstorage 
        localStorage.removeItem('tasks');
    }

    // load the tasks from the localStorage 
    function reloadTask() {
        let tasks = JSON.parse(localStorage.getItem('tasks'))||[];
        tasks.forEach(taskContent => creatTaskElements(taskContent));
    }

    reloadTask();
    addBtn.addEventListener('click',addTask);
})

