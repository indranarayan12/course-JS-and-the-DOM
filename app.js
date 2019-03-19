//adding 200 p tags to div and appending to div element
const myCustomDiv = document.createElement('div');

function respondToTheClick(event){
    if (event.target.nodeName === 'P'){
        console.log('The element clicked is ' + event.target.textContent);
    }
}

//performance.now() yields the loadong time taken by the execution yet
const startingTime = performance.now();
for(let i=1; i<=200;i++){
    const myCustomP = document.createElement('p');
    myCustomP.textContent = 'Paragraph no ' + i;
    myCustomDiv.appendChild(myCustomP);
}
const endingTime = performance.now();
console.log(endingTime-startingTime);

myCustomDiv.addEventListener('click', respondToTheClick);


// event DOMContentLoaded is fired when all the HTML code is parsed and loaded
document.addEventListener('DOMContentLoaded', function(){
    console.log('the DOM is ready to be interacted with');
})


document.body.appendChild(myCustomDiv);

// for loop implementation to show performance.now() functionality

const starttime = performance.now();

for(let i=1; i <= 100; i++){
    for(let j=1; j<=100; j++){
        console.log('i and j are ', i, j);
    }
}

const endingtime = performance.now();
console.log('This code took ' + (endingtime-starttime) + ' milliseconds'); // if starttime and endtime is not surrounded by braces then type mismatching yeilds an error

// a better alternate is to use document fragment that allows us to omit the un-necessary div element without performance compromise

const fragment = document.createDocumentFragment();

for(let i=0; i <=200; i++){
    const newElement = document.createElement('p');
    newElement.innerText = 'This is document fragment made paragraph ' + i;
    fragment.appendChild(newElement);
}

document.body.appendChild(fragment);

// the call stack in JavaScript is used to keep track of the current functions excutions going on which is needed to return to correct location after function ends which removes it from the call stack

// Event listeners are asynchronous in nature ass they don't follow normal execution pattern but are rather triggered

// event loop is an indicator an event being triggered the functions being performed are the call stack, web APIs/Browser and Queue. when an asynchronous event is triggered it is loaded in the queue till the call stack is empty.

// setTimeout() can be used to make sure that user interactions go on even while a long time taking task is being executed by adding setTimeout(functionName, 0) at certain intervals which will cause it to be enqued at last and hence the interaction in that period will be executed first before going back to where it was left