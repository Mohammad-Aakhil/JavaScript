//template literals
//it is used to inject variables in a string, we use `` for template literals
//works similar like f-strings in python
let obj = {
    laptop : 'Acer',
    price : 39999,
    deal : 'BB days'
}

console.log(`This ${obj.laptop} laptop is comes at a price of Rs.${obj.price} in ${obj.deal}`)

// string methods
//we can access string characters through their index/indices
let pLang = 'JavaScript'
console.log(pLang[0]) //J
console.log(pLang[1]) //a
console.log(pLang[4]) //S
let size = pLang.length
console.log(size)
console.log(typeof size)

// access through loop
for (let i = 0; i<=(size-1); i++){
    console.log(pLang[i])
}

//javascript strings are immutable and does'nt change with methods
console.log(pLang.length)           //returns the size/length of the string

console.log(pLang.substring(4,size-1))  //returns substring by taking start and stop indices as parameters 
console.log(pLang.substring(10,4))  //returns 'Script',bcoz if start > stop they got swapped 
console.log(pLang.substring(-3,size))  //return 'JavaScript' it treats '-ve' number as 0

console.log(pLang.slice(4, 9))   //
console.log(pLang.slice(-4, size))   //
console.log(pLang.slice(9, 4))   //if start > stop returns empty

console.log(pLang.toLowerCase())    //converts all string characters to lowercase
console.log(pLang.toUpperCase())    //converts all string characters to uppercase
console.log(pLang.trim())           //eliminates whitespaces from starting and ending of an string 

console.log(pLang.concat(' ', 'React'))

console.log(pLang)  //any of the above methods can't change original 

let framework = 'React'
console.log(pLang.concat(framework)) 


let greet = 'Hello'
// console.log(greet.replace('H', 'Y'))
// console.log(greet.replace('o', 'ow'))
let y = greet.replace('H', 'Y')
let ow = y.replace('o', 'ow')
console.log(ow)

let longGreet = 'Hellololololo'
console.log(longGreet.replaceAll('lo', 'x'))

let king = 'SRK'
console.log(king.charAt(1))     //takes string index as param returns letter at that index

console.log(king.indexOf('K'))  //takes string letter as param returns index of that letter 


//problem
let fName = prompt('enter ur fullname:')
console.log(`Welcome user @${fName}${fName.length} !`)

