// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.intro = () => {
        console.log("Hi my name is", this.name, "and my favorite tech is", this.tech)
    }
}


// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech




// TODO: Create a new object using the 'Developer' constructor
const pete = new Developer("Pete", "JS");



// TODO: Call the 'introduction()' method on the new object
pete.intro();