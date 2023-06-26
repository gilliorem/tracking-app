class Task
{
    constructor(name, checked, parent)
    {
        this.name = name;
        this.checked = checked;
        this.parent = parent;
        this.display(parent)
    }

    display(parent)
    {
        let taskElement = createDiv(parent, Task.name, [Task.name+"-task"])
    }

    setTask(button)
    {
        button.addEventListener('click',()=>
        {
            this.taskValidity(window.todoApp.input.value);
            this.listenCheck()
        })
    }
    
    taskValidity(text)
    {
        text.trim();
        if(text.length>0)
        {
            this.displayTask(window.todoApp.taskContainer, window.todoApp.input.value);
            window.todoApp.input.value ="";
        }
        else
        alert("enter a valid Task.")
    }

   
    
    checkTask(bubble)
    {
        bubble.classList.add("checked");
    }
    listenCheck()
    {
        this.bubble.addEventListener("click",()=>
        {
            this.checkTask(this.bubble);
            console.log("clic")
            console.log(this.bubble.classList)
        })
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