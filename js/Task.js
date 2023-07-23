class Task
{
    constructor(name, checked, parent)
    {
        this.name = name;
        this.checked = checked;
        this.parent = parent;
        this.taskValidity(name);
        this.handleCheck()
        this.tracker = new Tracker(this);
        this.serealize();
    }

    display(parent)
    {
        this.dom = createDiv(parent, this.name, [this.name+" task"]);
        this.bubble = createDiv(this.dom, "", ["bubble"]);
    }

    taskValidity(text)
    {
        text.trim();
        if(text.length>0)
        {
            this.display(this.parent)
        }
        else
        alert("enter a valid Task.")
    }
    
    check()
    {
        this.checked = !this.checked;
        this.bubble.classList.toggle("checked");
        if(this.checked)
        {
            this.bubble.classList.add("checked");
        }
        else this.bubble.classList == "bubble";
        
    }

    handleCheck()
    {
        this.bubble.addEventListener("click",()=>
        {
            this.check();
        })
    }
    
    serealize()
    {
        let serealizedTask = 
        {
            name : this.name,
            checked : this.checked,
            minute : this.tracker.min,
            second : this.tracker.sec
        }
        return serealizedTask;
    }
    
}



