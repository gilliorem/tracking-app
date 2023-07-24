class Tracker
{
    constructor(task)
    {
        this.button = createButton(task.dom, "Start", [task.name+" tracker"]);
        this.dom = createDiv(task.dom, "", [task.name+" timer-element"]);
        this.dom.style.display = "inline-flex";
        this.min=0o0;
        this.dom.minute = createDiv(this.dom, "00", [task.name+" min"]);
        this.sec =0o0;
        this.dom.second = createDiv(this.dom, ":00", [task.name+" sec"]);
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
                if(this.sec<10)
                {
                    this.dom.second.innerText = ":0"+ this.sec;
                }
                if(this.sec>=10)
                {
                    this.dom.second.innerText = ":"+this.sec;
                }
                if (this.sec>=60)
                {
                    this.min++;
                    this.dom.minute.innerText = "0"+this.min;
                    this.sec =0;
                    this.dom.second.innerText =   ":0"+0;
                }
                if(this.min>60)
                {
                    this.dom.min.innerText = this.min;
                }
            }, 100)
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
    
    deserealize(time)
    {
        console.log(this.sec);
        this.sec = time.second;
        this.min = time.minute;
        this.dom.second.innerText = ":"+time.second;
        this.dom.minute.innerText = "0"+time.minute;
    }
}

