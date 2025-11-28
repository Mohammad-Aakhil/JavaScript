//--OBJECTS in JavaScript--//
//An JavaScript object is an entity which as state and behaviour (properties & methods). 

let student = {
    fullName : "Nobita",
    marks : 25,
    showMarks : function(){
        console.log(this.marks)
    },
    objectInfo : () => {
        console.log("I'm a student object function")
    },
};

//------------------------------------------------------------------------------------------------------------------
let player = {
    fullName : "Rohit",
    jersey_no : "45",
    objectInfo : () => {
        console.log("I'm a player object function")
    }
};

//------------------------------------------------------------------------------------------------------------------

//using __proto__ method on an object we can able to make it to access the properties and methods of another object,
//for example below player object can access the fullName, marks variables/properties and showMarks method/function.
player.__proto__ = student;

//------------------------------------------------------------------------------------------------------------------
// logging player objects own properties and methods

console.log(player.fullName)

console.log(player.jersey_no)

//if both the objects have same method(objectInfo) then it prioritises its own propety or method
//logging the variable value
console.log(player.objectInfo)  

//calling the function on player object
player.objectInfo()


//--------------------------------------------------------------------------------------------------
//since we set student as player's proto we can also access students properties and methods
console.log(player.marks)

//logging the variable value
console.log(player.showMarks)       

//calling the function on player object
player.showMarks()
