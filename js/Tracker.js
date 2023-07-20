// console.log('test cmd commit')
class Tracker
{
    constructor(task)
    {
        this.button = createButton(task.dom, "Start", [task.name+" tracker"]);
        this.timerElement = createDiv(task.dom, "", [task.name+" timer-element"]);
        this.min=0o0;

        this.minuteElement = createDiv(this.timerElement, "00", [task.name+" min"]);
        this.sec =0o0;
        this.secondElement = createDiv(this.timerElement, ":00", [task.name+" sec"]);


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
                    this.secondElement.innerText = "0"+ this.sec;
                }
                if(this.sec>=10)
                {
                    this.secondElement.innerText = this.sec;
                }
                if (this.sec>=60)
                {
                    this.min++;
                    this.minuteElement.innerText = "0"+this.min;
                    this.sec =0;
                    this.secondElement.innerText =   "0"+0;
                }
                if(this.min>60)
                {
                    this.min.innerText = this.min;
                }
                console.log(this.sec);
            }, 1000)
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

