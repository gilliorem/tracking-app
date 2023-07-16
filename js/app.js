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
        this.setKeyBind();
    }
    save()
    {
        let serealizedApp = 
        {
            tasks :[],
            
        }
        for (let task of this.taskContainer.tasksList)
        {
            serealizedApp.tasks.push(task.serealize())
        }
        let stringyfiedApp = JSON.stringify(serealizedApp);
        localStorage.setItem("TODOAPP", stringyfiedApp);
    }
    setKeyBind()
    {
        window.addEventListener('keydown', (e)=>
        {
            if (e.ctrlKey && e.key == "s")
            {
                e.preventDefault();
                this.save();
            }
        })
    }

    //Lire local storage
    // deseraliser 
    // trouve l'etat d'objet pour l'afficher dans le dom.


    
}

window.todoApp = new todoApp();

// make the local storage work.
// test commit