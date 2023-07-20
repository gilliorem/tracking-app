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
        console.log(this)
    }

    display(parent)
    {
        this.dom = createDiv(parent, this.name, [this.name+" task"]);
        this.bubble = createDiv(this.dom, "", ["bubble"]);
        if(this.checked)
        {
            this.check();
        }
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
        this.checked = !this.checked
        if(this.checked)
        {
            this.bubble.classList.toggle("checked");
            this.dom.style.textDecoration="line-through";   
        }
        else
        {
            this.bubble.classList.toggle("checked");
            this.dom.style.textDecoration="none";               
        }
        console.log(this)
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
            time : this.tracker.min
        }
        return serealizedTask;
    }
    
}



