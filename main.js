//variable to get main paragraph
var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

//variable to get all elements with tag ul
var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

//variable to get the first index of the element with tag ul
var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

//variable that gets all elements with the tag li
var allListItems = document.getElementsByTagName('li');
console.log(allListItems);

//function that iterates through the length of the list and gets the inner text of all items in the list; then it sets the inner text to the index of the item
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);

//variable that creates a list element in the document
var li = document.createElement('li');
console.log(li);

//sets the inner text of li
var newElement = li.innerText = "another list item";
console.log(newElement);
console.log(li);

//appends li to the end of the list within the unoerdered list
getSingleElement.appendChild(li);
console.log(allListItems);

//variable that creates another list element
var anotherListElement = document.createElement('li');
//addes the noted text to anotherListElement
anotherListElement.innerText = "prepend";
console.log(anotherListElement);
/*inserts anotherListElement before the first child of the ul list
**var insertedNode = parentNode.insertBefore(newNode, referenceNode);**/
getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);

//variable that creates a new list element
var lucyListElement = document.createElement('li');
//adds text to lucyListElement
lucyListElement.innerText = "my notes";
//inserts lucyListElement before the first child of the ul list
getSingleElement.insertBefore(lucyListElement, getSingleElement.firstChild);
console.log(allListItems);

//remove first child of the ul list
getSingleElement.removeChild(getSingleElement.firstChild);

//practice: removes a targeted list element
// getSingleElement.removeChild(getSingleElement.childNodes[2]);

//makes background of paragraph with id main colored red
document.getElementById('main').style.backgroundColor = "red";
//gets first element in ul list and makes background color yellow
getSingleElement.firstChild.style.backgroundColor = "yellow";
//gets gets second element in ul list and makes background green
getSingleElement.childNodes[2].style.backgroundColor = "green";

// // target the button
// var button = document.getElementById('main-button');

// // event handler
// function buttonClick() {
//   console.log('You just clicked the button!');
// }

// // event registration
// button.onclick = buttonClick;

// all in one - target, event handler - combines three steps above
document.getElementById("main-button").addEventListener("click", function(event){
  console.log('You just clicked the button!');
});

//practice: event listener on each list element so when clicked, prints list text via an alert
getSingleElement.firstChild.addEventListener("click", function(event){
  alert(getSingleElement.firstChild.innerHTML);
});




