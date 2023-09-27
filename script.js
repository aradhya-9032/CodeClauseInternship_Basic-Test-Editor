
function f1(){

   document.getElementById("textarea1").style.fontWeight="bold";
 
 }
 function f2(){
 
   document.getElementById("textarea1").style.fontStyle = "italic";
 
 }
 function f3(){
 
   document.getElementById("textarea1").style.textAlign = "left";
 
 }
 function f4(){
 
   document.getElementById("textarea1").style.textAlign = "center";
 
 }
 function f5(){
 
   document.getElementById("textarea1").style.textAlign = "right";
 
 }
 
 function f6(){
 
   document.getElementById("textarea1").style.textTransform = "uppercase";
 
 }
 function f7(){
 
   document.getElementById("textarea1").style.textTransform = "lowercase";
 
 }
 function f8(){
 
   document.getElementById("textarea1").style.textTransform = "capitalize";
 
 }
 function f9(){
 
   document.getElementById("textarea1").style.fontWeight = "normal";
   document.getElementById("textarea1").style.textAlign = "left";
   document.getElementById("textarea1").style.fontStyle = "normal";
   document.getElementById("textarea1").style.textTransform = "capitalize";
   document.getElementById("textarea1").value=" ";
 }

//  function toggleTheme() {
//    const body = document.body;
//    body.classList.toggle('dark-theme');
// }

// Function to toggle the dark theme
function toggleTheme() {
   const body = document.body;
   body.classList.toggle('dark-theme');

   // Toggle the icon between sun and moon
   const themeToggleIcon = document.querySelector('#theme-toggle-button i');
   if (body.classList.contains('dark-theme')) {
       themeToggleIcon.classList.remove('fa-sun');
       themeToggleIcon.classList.add('fa-moon');
   } else {
       themeToggleIcon.classList.remove('fa-moon');
       themeToggleIcon.classList.add('fa-sun');
   }
}

// Add a click event listener to the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle-button');
themeToggleButton.addEventListener('click', toggleTheme);






