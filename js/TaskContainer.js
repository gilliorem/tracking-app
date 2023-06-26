class TaskContainer 
{
    constructor(todoApp)
    {
        this.tasksList =[];
        this.element = createDiv(todoApp.container, "", ["task-container"]);
        this.handleAddTask(todoApp.button)
    }
    addTask()
    {
        let task = new Task(window.todoApp.input.value, false, this.element);
        this.tasksList.push(task);
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