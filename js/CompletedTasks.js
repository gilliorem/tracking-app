class CompletedTask
{
    constructor()
    {
        this.list = [];
        this.dom = createDiv(B,"Completed tasks : 0", ["completed-task-container"]);
    }
    addTask(task)
    {
        this.list.push(task);
        todoApp.tasks.filter((t)=>!t.checked);
        this.dom.innerText = "Completed tasks : " +this.list.length;
        
    }
}
