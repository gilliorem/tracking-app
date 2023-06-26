class TaskContainer 
{
    constructor(todoApp)
    {
        this.tasksList =[];
        this.element = createDiv(todoApp.container, "", ["task-container"]);
    }
    addTask()
    {
        let task = new Task(window.todoApp.input.value, false, this.element);
        this.tasksList.push(task);
    }
    
}