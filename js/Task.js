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
        console.log(this);
        this.serealize();
    }

    display(parent)
    {
        this.taskElement = createDiv(parent, this.name, [this.name+" task"]);
        this.bubble = createDiv(this.taskElement, "", ["bubble"]);
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
    
    checkTask()
    {
        this.bubble.classList.toggle("checked");
        if (this.bubble.classList.contains("checked"))
        {
            this.checked = true;
            this.taskElement.style.textDecoration="line-through";
        }
        else this.checked =false;
        if(!this.checked)
        {
            this.taskElement.style.textDecoration="none";
        }
    }
    handleCheck()
    {
        this.bubble.addEventListener("click",()=>
        {
            this.checkTask(this.bubble);
            console.log(this)
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




// class Task
// {
//     setTask(button, input)
//     {
//         button.addEventListener("click",()=>
//         {
//             this.taskName = this.input.value.trim();
//             if (this.taskName.length > 0)
//             {
//                 this.tasksList.push(this.taskName);
//                 this.newTask = createDiv(this.taskContainer,  this.taskName + "🔘", [this.taskName + "-task"]);
//                 this.input.value="";    
//             }
//             else
//             {
//                 alert("enter a valid task");
//             };
            
//             this.checkTask(this.newTask);
//             this.eraseTask(this.newTask);
//             console.log(this.tasksList);
//         });
        
//         this.input.addEventListener("keydown",(e)=>
//         {
//             if(e.key==="Enter")
//             {
//             this.taskName = this.input.value.trim();
//             if (this.taskName.length > 0)
//             {
//                 this.tasksList.push(this.taskName);
//                 this.newTask = createDiv(this.taskContainer,  this.taskName + "", [this.taskName + "-task"]);
//                 this.input.value="";    
                
//             }
//             else
//             {
//                 alert("enter a valid task");
//             };
            
//             this.checkTask(this.newTask);
//             this.eraseTask(this.newTask);
//             console.log(this.tasksList);

//             }
//         })
//     }
//     checkTask(task)
//     {
//         task.addEventListener("click",()=>
//         {
//             task.innerText = this.taskName + "✔️";
//             task.classList.add("completed");
//         })
//     }
//     eraseTask(task)
//     {
//         task.addEventListener("contextmenu", (e)=>
//         {
//             e.preventDefault();
//             task.remove();
//             this.tasksList = this.tasksList.filter((t)=>t==this.taskName);
            
//         })
//     }
// }