class todoApp
{
    constructor()
    {
        this.dom = createDiv(B,"", ["app-container"]);
        this.title = createTitle(this.dom, "TO DO: ", ["title"]);
        this.titleDesign = createDiv(this.title, "", ["title-design"]);
        this.input = createInputElement(this.dom, "", "task", ["task-input"]);
        this.button = createButton(this.dom, "+", ["add-task-button"]);
        this.tasks = new Tasks(this);
        this.setKeyBind();
        this.onRefresh();
    }
    save()
    {
        let serealizedApp = 
        {
            tasks :[],
        }
        for (let task of this.tasks.list)
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
    displayLocalStorage()
    {
        let todoAppJson = localStorage.getItem("TODOAPP");
        if(!todoAppJson) return
        let todoAppParsed = JSON.parse(todoAppJson);
        for (let task of todoAppParsed.tasks)
        {
            this.tasks.addTaskFromLocalStorage(task);
        }
    }
    onRefresh()
    {
        window.addEventListener("load",()=>
        {
            this.displayLocalStorage();
        })
    }
}

window.todoApp = new todoApp();
