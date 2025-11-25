// Function based event Listener
btn1 = document.querySelector('#btn1')
btn1.onclick = () => {
    console.log('btn 1 from js file')
}
// In-line eventlistener is overridden by jsFile eventListener

//---------------------------------------------------------------------------
let div = document.querySelector('div')
div.addEventListener('mouseover', () => {
    document.querySelector('#hide').style.visibility = 'visible';
})

div.addEventListener('mouseleave', () => {
    document.querySelector('#hide').style.visibility = 'hidden'
})


//----------------------------------------------------------------------------
btn2 = document.querySelector('#btn2')
console.log(btn2.innerText)
btn2.ondblclick = (e) => {
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log('btn 2 from js file')
}


//---------------------------------------------------------------------------- 
form = document.getElementById("form")
enteredText = document.querySelectorAll('label')
input1 = enteredText[0].innerText
input2 = enteredText[1].innerText
form.addEventListener("submit", (e) => {
    e.preventDefault();    //prevents reload after form submission
    alert('Form Submitted')
    console.log(e.input1.target.value)
    console.log(e.input2.target.value)
});


//----------------------------------------------------------------------------
//Adding multiple event handers using EventListener
const handler1 = () => {
    console.log('First Handler')
}; 

const handler2 = () => {
    console.log('Second Handler')
}; 

const handler3 = () => {
    console.log('Third Handler')
}; 


//addEventListener(event, callbackFunction)
//removeEventListener(event, callbackFunction)
//the call back reerence reference should be same to remove

btn1.addEventListener('click', handler1);
btn1.addEventListener('click', handler2);
btn1.addEventListener('click', handler3);


//Using removeEventHandler
btn1.removeEventListener('click', handler3);


//------------------------------------------------------------------------------
let themebtn = document.querySelector('#themebtn')
let currMode = 'light'

themebtn.addEventListener('click', () => {
    if (currMode === 'light') {
        currMode = 'dark';
        document.body.style.backgroundColor = 'black'
    }else {
        currMode = 'light'
        document.body.style.backgroundColor = 'white'

    }
    console.log(currMode);
});


//------------------------------------------------------------------------------
let formVal = document.getElementById("email")
formVal.addEventListener("input", (e) => {
    let value = e.target.value
    let isValid = value.includes('@')
    document.getElementById("emailError").innerText = isValid ? '':'invalid input email'
})


//-------------------------------------------------------------------------------