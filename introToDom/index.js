// JQuery notes

/*
                NodeList                Single              Looping  
 Method         HTMLCollection            or                Through
                or Element              Multiple               It

querySelector

querySelectorAll

getElementById --> (grabs only one thing)

getElementsByClassName -->( grabs all elements listed under the called class)

getElementsByTagName
---------------------------------------------------------------------------------------

example of how the syntax is written:  document.getElementById('[type here]')
                                       document.querySelectorAll('[type here]')

            let header =
            document.getElementbyId('aboutme');
*/


//!-----------------------GetElementById------------------------------------------------
//For instance if we wanted to target only the header from the HTML index file we would type the following

            const header = document.getElementById('header');
            console.log(header);

// to change the font color to green
            document.getElementById("header").style.color ="green";

//Since we already had the "bucket" of the const header above we can just type this --

            header.style.color ="green";

// replacing inner text

            header.innerText = "Hello World";

//! ----------------------GetElementByClassName------------------------------------------

const errorList = document.getElementsByClassName('error-list');
console.log(errorList);

// looking at this in the browser under console shows us that it is an HTML Collection. There is more than one item, so it is like an array.
//Therefore since we want to target the second error on the list to change we will use brackets and put a 1 in for the second
//position.

errorList[1].innerText = "I changed error 2"; // changes text from error 2 to this text

//loop through and change the style to red on both errors

errorList[0,1].style.color ="red";  // this only changed the color of the second error

errorList[].style.color = "red"; // this left them both black with an error of unexpected token for the[]

errorList.style.color = "red"; // does nothing, says it cannot set color property for undefined
 

//EXAMPLE 1 LOOPING----------------->For Loop<--------------------------------------------------------------

for ( let i = 0; i< errorList.length; i++){
// for loop--> i=0 the first position in the array --> i< errorList.length (this will cover the whole list)--> i++ so that it loops through all

    errorList[i].style.color = "red";
// instead of hard coding the numbers of the array, we use the (i) which was declared above in the first part
//then the styling. This changes the color of both errors, and would for as many was was listed due to the loop function
}


//EXAMPLE 2 LOOPING---------------->For OF Loop<---------------------------------------------------------------

for (error of errorList) {
    error.style.color ="green";     //this changed both errors to green text
}                                   

//? CAN NOT DO with this query method
//EXAMPLE 3 LOOPING---------------->FOR EACH LOOP<------------------------- 
//?---------WILL NOT WORK! while similar to an array, it is NOT an array------

errorList.forEach((error) => (error.style.color = "purple")); 



//!---------------------------------------GetElementByTagName---------------------------------------------------
// this method scrubs the entire document looking for the tag that you name
//it returns it to you in a list , like an array

const tags = document.getElementsByTagName("p"); // this is an HTML Collection
console.log(tags);

//replace the lorem ipsum with another text

tags[0].innerText = " I changed the text by using getElementByTagName !"; // changed the paragraph of lorem ipsum to this sentence

const listItems = document.getElementsByTagName("li");
//create variable to house document --> call the error list elements by using the tag name
console.log(listItems); 

// change list items to italicized text

listItems[0].style.fontStyle = "italic"; // italicizes the first item
listItems[1].style.fontStyle = "italic"; // italicizes the second item

// to make it easier use a ForLoop

for (let i=0; i< listItems.length; i++){
    listItems[i].style.fontStyle = "italic"; // this turns all list items into italic text
}


//!----------------------Query Selector--------------------------------------------------------

//It is very specific, it searches for an item and when it finds the first item that matches, it stops looking and returns that one.

const header = document.querySelector("h1"); // or you can use ('#header') this will get the same header 
console.log(header);

const errorList = document.querySelector(".errorList"); //  uses .notation as it is accessing a class
                                                        // this returns the first item on the errorlist as it returns only the 
                                                        // first one it finds

// if you want to select the second one and are using querySelector you can go into googles dev tools, select the list item you want, 
// click on copy element and paste it in here


const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)"); //<--you would paste the element link you copied from chrome here
console.log(errorList2); // returns the second list item


//!-----------------------Query Selector All------------------------------------------------

//uses same selectors as query selector but returns a NODE list so it returns all the items matching in the document
//? ---------------Thus you CAN use FOR EACH LOOPS with these

const headerTags = document.querySelectorAll("h1");
console.log(headerTags); // shows both header tags in the document, the elevenFifty and the ErrorList header marked as NodeList(2)

console.log(headerTags[1]); // this brings up the second header on the NODE list, the Error List Header

// now we want to change BOTH headers to Blue using a ForEachLoop
headerTags.forEach(h => { h.style.color ="blue"}); // this changes both headers to blue
// ^headerTags has been given the value of the H1 headers through the previous jquery
// h stands for headers
// we want to run it into a for each loop to alter each one of them so .forEach
// we use an arrow function to give h the value of the headers and then change the color of them both


// selecting the error list items and changing them to italics with a forEach loop
const listItems = document.querySelectorAll(".error-list");

//PROMISES
// -- a promise is a way we can handle asynchronous code


listItems.forEach (li => { li.style.fontStyle ="italic"}); // changes all list items to italics






