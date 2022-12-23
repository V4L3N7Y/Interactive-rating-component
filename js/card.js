
///id click event to change the color/// it looks dirty but if u have a better solution please let me know 

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

btn1.addEventListener('click', function onClick() {
  btn1.style.backgroundColor = 'hsl(25, 97%, 53%)';
  btn1.style.color = 'white';
});

btn2.addEventListener('click', function onClick() {
    btn2.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn2.style.color = 'white';
  });

btn3.addEventListener('click', function onClick() {
  btn3.style.backgroundColor = 'hsl(25, 97%, 53%)';
  btn3.style.color = 'white';
});  

btn4.addEventListener('click', function onClick() {
    btn4.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn4.style.color = 'white';
  });

btn5.addEventListener('click', function onClick() {
    btn5.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn5.style.color = 'white';
  }); 
  
 
/// number of selected elements anchor tag ///

let counter = 0;
  
// Select all elements with the class "btn"
const elements = document.querySelectorAll('.btn');

// Bind a click event listener to each element
elements.forEach(element => {
  element.addEventListener('click', () => {
    counter++;
    console.log(counter)
    // Set the counter value in a cookie
    document.cookie = `counter=${counter}`;
   
  });
});

///If this look suspicious for you then you are probably right////

