class Tasks 
{
    constructor(todoApp)
    {
        this.list =[];
        this.dom = createDiv(todoApp.dom, "", ["task-container"]);
        this.handleAddTask(todoApp.button)
    }
    addTask()
    {
        this.task = new Task(window.todoApp.input.value, false, this.dom);
        this.list.push(this.task);
    }
    addTaskFromLocalStorage(data)
    {
        const task = new Task(data.name, data.checked, this.dom);
        this.list.push(task);
        if(task.checked)
        {
            task.bubble.classList.add("checked");
        }            
        task.tracker.sec = data.second;
        task.tracker.min = data.minute
        console.log(data.second)
        console.log(task.tracker.dom.minute.innerText)
        task.tracker.dom.second.innerText = ":"+data.second;
        task.tracker.dom.minute.innerText = "0"+data.minute;
    }
    handleAddTask(button)
    {
        button.addEventListener("click",()=>
        {
            this.addTask();
            window.todoApp.input.value="";
        })
    }
}