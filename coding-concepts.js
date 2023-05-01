// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
// console.log(cohort.split(""))

// a) Your answer:
// An arry that as each individual char as its own string

// b) Verify and explain:
// .Split is a built in method that takes in a string and returns the an array. Since we passed in a blank string, it will give us back every letter. As if we wouldve passed in a string with a space, it wouldve returned 'Charlie', '2023' 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:
// Hello Learn Student

// b) Verify and explain:
// The greeter function takes in parameter and returns it via string interperlation. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:
// every object in our array multiplied by 2

// b) Verify and explain:
// The map function takes withever command its given and extrapulates that over our object. Since we passed in numbers, it will multiply it all by 2

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:
// The current array without any even numbers.

// b) Verify and explain:
// The module key is used to find the remainder of a number. If a number can not be evenly divded by two, then it must be an odd number. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:
// 'JavaScript'

// b) Verify and explain:
// anytime we want to dive into an object, we use 'objectname.key' Coupled with the index of [0], we will get the first value of the key
// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// a new object with a name of George for student 

// b) Verify and explain:
// On line 73, student have the value of the variable name. We pass name in via the constructor. Therefore, whatever name wwe give, we will have that as our name for our object.
