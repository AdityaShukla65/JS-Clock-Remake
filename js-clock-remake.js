second=document.querySelector(".second-hand")
min=document.querySelector(".min-hand")
hour=document.querySelector(".hour-hand")
timer=document.querySelector("p")
btn=document.querySelector("button")

function mechanism(){
    let now= new Date();
    let formatted_time=now.toLocaleTimeString();
    let [second_time,min_time,hour_time]=["rotate("+formatted_time.slice(6,8)*6+"deg)","rotate("+formatted_time.slice(3,5)*6+"deg)","rotate("+(formatted_time.slice(0,2)*30 + formatted_time.slice(3,5)*0.5)+"deg)"]
    second.style.transform=second_time
    min.style.transform=min_time
    hour.style.transform=hour_time
    timer.innerHTML=formatted_time.slice(0,5)

    setTimeout(mechanism,1000)
}

btn.addEventListener("click",function(){
    let intervalStart=false
    if (intervalStart!=true){
        intervalStart=true
        new Audio("clock-sound.mp3").play()
        setInterval(()=>{
            new Audio("/js-clock-remake/clock-sound.mp3").play()
        },8000)
    }
})

mechanism()
