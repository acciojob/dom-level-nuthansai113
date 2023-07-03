

let element = document.getElementById("level");

 let level = 0;

 while(element && element.tagName !== "HTML"){
   element = element.parentNode;
   level++;
 }

 alert("The level of the element is: " + level);