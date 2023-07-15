class todoApp
{
    constructor()
    {
        this.container = createDiv(B,"", ["container"]);
        this.title = createTitle(this.container, "TO DO: ", ["title"]);
        this.titleDesign = createDiv(this.title, "", ["title-design"]);
        this.input = createInputElement(this.container, "", "task", ["task-input"]);
        this.button = createButton(this.container, "+", ["add-task-button"]);
        this.taskContainer = new TaskContainer(this);
        
    }
    checkIfValidTask()
    {

    }

    loadLocalStorage()
    {

    }
    loadServerData()
    {

    }
}

window.todoApp = new todoApp();

// make the local storage work.
// test commit