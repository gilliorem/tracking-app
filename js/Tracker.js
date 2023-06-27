class Tracker
{
    constructor(task)
    {
        this.button = createButton(task.taskElement, "Start", [task.name+" tracker"]);
        this.sec =0;
        this.min=0;

        this.timerElement = createDiv(task.taskElement, "00:00", [task.name+" sec"]);
        this.handleStartAndStop();
    }
    startAndStopButton()
    {
        this.button.classList.toggle("running");
        if(this.button.classList.contains("running"))
        {
            this.button.innerText ="Stop";
            this.interval = setInterval(()=>
            {
                this.sec++;
                this.timerElement.innerText = this.min+this.sec ;
                if(this.sec>=10)
                {
                    this.timerElement.innerText = "00:"+this.sec;
                }
                if(this.sec>=60)
                {
                    this.min++;
                    this.timerElement.innerText ="0"+this.min+this.sec;
                }
                console.log(this.sec);
            }, 50)
        }
        else
        {
            this.button.innerText = "Start";
            clearInterval(this.interval);
        }
    }
    
    
    handleStartAndStop()
    {
        this.button.addEventListener("click",()=>
        {
            this.startAndStopButton();
        })
    }
}

