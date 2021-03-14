//1
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?"
//use the .length method to determine the length of the string value. 
//1 Code Answer
let dogQuestion = "But what if I like dogs more than cats?"
console.log(dogQuestion.length)
//1 Result Answer
// 39


//2
//Write a variable and call it noms and have the value of the name any type of snack you like, 
//use the .length method to determine the length of the string value. 
//2 Code Answer
let noms = "Neon Gummi Worms"
console.log(noms.length)
//2 Result Answer
// 16


//3 
//Replace "no" values in the "I have no interest in Boba" in string using the correct method.
//3 Code Answer
let myOpinion = "I have no interest in Boba"
console.log(myOpinion.replace("no","absolutely no"))
//3 Result Answer:
// I have absolutely no interest in Boba(JK XD)


//4
//Trim this string "Tell me whyyyy!                 ".
//4 Code Answer
let randomSpace = "Tell me whyyyy!                 "
console.log(randomSpace.trim())
//4 Result Answer
// |Tell me whyyyy!|


//5
// Convert 1400 into a string.
//5 Code Answer:
let num = 1400
let fakeNum = num.toString();
console.log(fakeNum)
console.log(fakeNum + num)
//5 Result Answer:
// 1400, 14001400(since it can't add strings to numbers)


//6
//Convert the boolean true and false into integers
//6 Code Answer:
let isaiahIsCool = true
console.log(Number(isaiahIsCool))
//6 Result Answer:
// 1


//7
// Convert the string "02130" into an integer
//7 Code Answer:
let imposterNum = "02130"
console.log(Number(imposterNum))
//7 Result Answer:
// 2130


//8
//Search the string "Fighting Evil by Moonlight" for "Moonlight" content using the correct method.
//8 Code Answer:
let sentence = "Fighting Evil by Moonlight"
console.log(sentence.indexOf("Moonlight"))
//8 Result Answer:
// 17


//9
//Concatenate the following "I love"+ favorite food + Favorite drink "!"
//9 Code Answer:
let fFood = "Alfredo"
let fDrink = "Watermelon Brisk"
console.log(`I love ${fFood} and ${fDrink}. But they're not the greatest together...`)
//9 Result Answer:
// I love Alfredo and Watermelon Brisk. But they're not the greatest together...


//10
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?", 
//use the .length method to determine the length of the string value. 

//10 Code Answer:
// I believe I did this on question 1, but
let anotherDogQuestion = "But what if I like cats more than dogs?"
console.log(anotherDogQuestion.length)
//10 Result Answer:
// 39

//11
//Print to the console the smallest number in this list: 85, -3, 5, 93.2, -42.4 (list of numbers must be passed in this order)
//(Hint: Which Math method can you use to do this?)

//11 Code Answer:
console.log(Math.min(85, -3, 5, 93.2, -42.4))
//11 Result Answer:
// -42.4

//12
//Print to the console a random number between 1 to 10.

//12 Code Answer:
console.log(Math.floor(Math.random()*(10 - 1) + 1) + 1)
//12 Result Answer:
// Random whole numbers 1-10

//13
//Print to the console a random number between 14 to 21.

//13 Code Answer:
console.log(Math.floor(Math.random()* (21 - 14) + 14) + 1)
//13 Result Answer:
//  Random Numbers from 14-21


//14 Challenge! (Optional)
//Print to the console the current date in the format of "MM/DD/YYYY" using Date object methods you learned 

//14 Code Answer:
let date = new Date()
console.log(date.toDateString())
console.log(date.toLocaleDateString())
//14 Result Answer:
// wrong, but Sun Mar 14 2021
// I think the second one is right 3/14/2021