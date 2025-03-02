const discover = document.getElementById('discover');


// moving to blog post
discover.addEventListener('click',function(){
    window.location.href='./blog.html';
})

// today's date
let date = new Date().toDateString();

let day = date.substring(0, 3);
date = date.substring(4);

document.getElementById('calenderDivDay').innerText = day;
document.getElementById('calenderDivDate').innerText = date;

// Completed Button mistery

let doneTask = 23;
let dueTask = 6;

const buttons = document.getElementsByClassName('completedBtn');
document.getElementById('pendingTask').innerText = dueTask;
for(let i=0 ; i<buttons.length ; i++){
    const btn = buttons[i];
    btn.addEventListener('click', function() {

        const taskName = btn.closest('.bg-slate-200').querySelector('h1').innerText;

        // change task amounts and show updated value
        doneTask++;
        dueTask--;
        if(dueTask===0){
            alert("Congrats! You have completed all the current tasks");
        }
        document.getElementById('pendingTask').innerText = dueTask;
        document.getElementById('completedTask').innerText = doneTask;
        // make the specific button disabled
        btn.style.backgroundColor = "gray";
        btn.disabled = true;

        // Add to Activity log
        
        let time = new Date().toLocaleTimeString();

        const newActivity = document.createElement('p');
    
        newActivity.classList.add('bg-slate-200', 'text-lg', 'p-2', 'rounded-md', 'mt-8');

        newActivity.innerText = "you have completed the task "  + taskName + " at "+ time;



        taskContainer.appendChild(newActivity);

    });
}

// clearHistory

const clearHistorybtn = document.getElementById('clearHistorybtn');

clearHistorybtn.addEventListener('click',function(){
    const taskContainer= document.getElementById('taskContainer');
    
    taskContainer.innerHTML = '';
})

// Background COlor generate

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
function getCharacter(index) {
    return hexCharacters[index]
}

function generateNewColor() {
    let hexColorRep = "#"

    for (let index = 0; index < 6; index++){
        const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
        hexColorRep += getCharacter( randomPosition )
    }
    // console.log("HI THERE");
    document.body.style.backgroundColor = hexColorRep;
}

