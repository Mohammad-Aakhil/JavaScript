//Accessing Elements using getElementById, getElementsByClassName, getElementsByTagName, 
//querySelector, querySelectorAll
    let p = document.getElementById('para')

    console.log(p.innerText)
    p.innerText = 'P4P No-1 :- islam makhachev'
    p.innerHTML = '<i> P4P No-1 :- islam makhachev </i>'
    let all = document.querySelectorAll('.heading')

i = 0
for (i=0; i<=5; i+=1){
    all[i].innerText = 'Double Champion'
}

let newp = document.createElement('strong')
newp.innerHTML = 'White House, i ll make it easy'
document.getElementsByTagName('body')[0].appendChild(newp)
document.body.append(newp)


///////////////////////////////////////////////////////////////////////
//Changing Attributes
//Using:- setAttribute, getAttribute, removeAttribute.
let img = document.getElementById("pic");
console.log(img.getAttribute("src")); // old.png

img.setAttribute("src", "new.png");
console.log(img.getAttribute("src")); // new.png

console.log(img.getAttribute("alt")); // image
img.removeAttribute('src')
console.log(img.getAttribute("src")); // null


let head = document.querySelector('.heading')
console.log(head.innerHTML)
head = document.querySelectorAll('.heading')
console.log(head[0])
console.log(head[2])
console.log(head[5])

////////////////////////////////////////////////////////////
//styling via js
// document.body.style.backgroundColor = 'grey';



////////////////////////////////////////////////////////////
let newclass = document.querySelector('.content');
// newclass.classList.add('newstyle')

