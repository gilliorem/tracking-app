class Tasks 
{
    constructor(todoApp)
    {
        this.list =[];
        this.dom = createDiv(todoApp.dom, "", ["task-container"]);
        this.handleAddTask(todoApp.button);
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
        task.deserealize();
        console.log(data);
        console.log(task.tracker);
        task.tracker.deserealize(data);
        
    }
    handleAddTask(button)
    {
        button.addEventListener("click",()=>
        {
            this.addTask();
            window.todoApp.input.value="";
        })
    }
    filter(func)
    {
        this.list = this.list.filter(func);
    }
}