btn1 = document.querySelector('#btn1')
btn1.onclick = () => {
    console.log('btn 1 from js file')

}


btn2 = document.querySelector('#btn2')
btn2.ondblclick = (e) => {
    console.log(e.type)
    console.log(e.target)
    console.log('btn 2 from js file')
}

