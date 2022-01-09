var firstName = prompt("Please enter your First name: ")
var lastName = prompt("Please enter your Last name: ")
var height = prompt("Please enter your Height: ")
var age = prompt("Please enter your Age: ")
var petName = prompt("Please enter your Pet name: ")

if((firstName[0] == lastName[0]) && (height >= 170) && (age > 20 && age < 30) && (petName[petName.length - 1] == 'y')) {
    console.log("Hello Comrade!")
}else{
    console.log("There is nothing to see here!")    
}