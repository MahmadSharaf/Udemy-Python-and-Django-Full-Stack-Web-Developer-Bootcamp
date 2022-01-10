// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew(userName) {
    roster.push(userName)
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function remove(userName) {
    i = roster.indexOf(userName)
    if (i != -1) {
        roster.splice(i,1)        
    }else{
        alert("This name is not found!")
    }
}

// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.

function display() {
    console.log(roster);
}

// Start by asking if they want to use the web app

isUse = prompt("Do you want to use the App? y/n")

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
if (isUse == 'y' || isUse == 'Y'){
    quit = false
    while (!quit) {
        action = prompt("Please specify the action needed. 'add' to add a name, 'remove' to remove a name, 'display' to display all names, or 'quit' to exit the App.")
        if (action == "quit") {
            quit = true
        }else if (action == "add") {
            userName = prompt("Please enter the name to be added.")
            addNew(userName)
        }else if (action == "remove") {
            userName = prompt("Please enter the name to be removed.")
            remove(userName)
        }else if (action == "display") {
            display()
        }else{
            alert("Please enter a valid value")
        }
    }
}