//Pulling out the buttons 'Start','Stop'&'Reset'
let btn=document.getElementsByClassName('btn-class');

//Initializing the value with zero in the starting
let hours=0;
let minutes=0;
let seconds=0;

let timings=document.getElementsByClassName('timings');  //It hold the element where the time is shown

let startInterval=0;
let isstarted=false;

function startTimer(){                                  //Main function of StopWatch
        startInterval=setInterval(function(){           //Setting the interval which will be called in every 1sec
        seconds++;
        if(seconds<10){
            timings[2].innerHTML='0'+seconds;           //If the seconds less than 10 we should render 0+seconds value
        }
        else if(seconds==60){
            seconds=0;                                  //Once the seconds value becomes 60 reseting the value of-
            timings[2].innerHTML='0'+seconds;           //-minutes and seconds
            minutes++;
            if(minutes<10){
                timings[1].innerHTML='0'+minutes;       //If the minutes less than 10 we should render 0+minutes value
            }
            else{
                timings[1].innerHTML=minutes;
            }
            if(minutes==60){
                minutes=0;
                hours++;
                if(hours<10){
                    timings[0].innerHTML='0'+hours;     //If the hours less than 10 we should render 0+hours value
                }
                else{
                    timings[0].innerHTML=hours;
                }
                timings[1].innerHTML='00';
            } 
        }
        else{
            timings[2].innerHTML=seconds;
        }
    },1000);
}

btn[0].addEventListener('click',function(){    //Adding function to 'Start' Button
    if(!isstarted){
        isstarted=true;
        startTimer();    
    }
});    

btn[1].addEventListener('click',function(){     //Adding function to 'Stop' Button
    clearInterval(startInterval);
    isstarted=false;
})

btn[2].addEventListener('click',function(){     //Adding function to 'Reset' Button
    minutes=0;
    seconds=0;
    hours=0;
    for(let val of timings){
        val.innerHTML='0'+'0';
    }
});

// -----------------------------------------------aside-section-----------------------------------------------
let saveBtn=document.getElementsByClassName('record-btn');          //Getting the Save button Element
let recordList=document.getElementsByTagName('ul');                 //Element where we will render the record time

let today=new Date();                                 //Creating object of Date and getting the current date and time
let month=today.getMonth()+1;
let year=today.getFullYear();
let date=today.getDate();

let current_hours=today.getHours();
let current_minutes=today.getMinutes();
let current_seconds=today.getSeconds();
let recordArray=[];

//Adding Event Listner to save button and saving all the value inside recordArray
saveBtn[0].addEventListener('click',function(){
    let record_time=`<li>${timings[0].innerText}:${timings[1].innerText}:${timings[2].innerHTML}</li>`;
    let record_date=`<li>${date}/${month}/${year}</li>`;
    let current_time=`<li>${current_hours}:${current_minutes}:${current_seconds}</li>`;
    let arr=[record_time,record_date,current_time];
    recordArray.push(arr);
    renderTheRecord();
});


//Rendering the recorded values on the page from saved value in recordArray
function renderTheRecord(){
    var len=recordArray.length;
    recordList[0].innerHTML+=recordArray[len-1][0];
    recordList[1].innerHTML+=recordArray[len-1][1];
    recordList[2].innerHTML+=recordArray[len-1][2];
    console.log('render function inside');
}
