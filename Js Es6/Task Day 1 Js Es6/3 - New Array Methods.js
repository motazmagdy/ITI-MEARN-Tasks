console.log("A : Test that every Element at the array is String");

var fruits = ["apple","strawberry","banana","orange","mango"];

console.log(fruits);

function elementsStr(element){
    if(typeof element== "string"){
        console.log(`${element} is String `);
    }else {
        console.log(`${element} is NOT a String `);
    }
}

fruits.forEach(elementsStr);

var fruits2 = [5,58,"apple","strawberry","banana","orange","mango"];

console.log(fruits2);

fruits2.forEach(elementsStr);

///////////////////////////////////////////////////////////////////

function testStarta(element){
    let st = element.toString();
    console.log(st.startsWith("a"),st);
}
console.log("B : Test that some of the array elements starts with 'a'");
fruits.forEach(testStarta);

//////////////////////////////////////////////////////////////////

var newFilteredArray =[];
function newFilteredArr (element){
 let st = element.toString();
 if(st.startsWith("b") == true || st.startsWith("s") == true){
  newFilteredArray.push(st);
}
}
    fruits.forEach(newFilteredArr);
    console.log("C : the new Filtered Array with elements starts with 'b' or 's'");
    console.log(newFilteredArray);

////////////////////////////////////////////////////////////////

var newGeneratedArray = [];
function newGenerated(element){
    let newArrInd = "I Like " + element;
    newGeneratedArray.push(newArrInd);
}
fruits.forEach(newGenerated);
console.log("D , E : the new Generated Array");
console.log(newGeneratedArray);

////////////////////////////////////////////////////////////////

document.write(`Solution is described in the Console`)

