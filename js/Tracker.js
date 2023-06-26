class Tracker
{
    constructor(task)
    {
        this.button = createButton(task.taskElement, "⏯️", [task.name+" tracker"]);
    }
    startTracking()
    {
        let timer;
        function timer()
        {
            timer++;
        }
        setInterval(timer,10000)
    }
    handleStartTracking()
    {
        this.button.addEventListener("click",()=>
        {
            this.startTracking();
        })
    }
}
