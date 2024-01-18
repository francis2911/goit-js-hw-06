let counterValue = 0;

 const valueSpan = document.getElementById('value');

 const incrementButton = document.querySelector('[data-action="increment"]');
 const decrementButton = document.querySelector('[data-action="decrement"]');


 function updateCounter() {
   valueSpan.textContent = counterValue;
 }

 
 function incrementCounter() {
   counterValue += 1;
   updateCounter();
 }

 
 function decrementCounter() {
   counterValue -= 1;
   updateCounter();
 }


 incrementButton.addEventListener('click', incrementCounter);
 decrementButton.addEventListener('click', decrementCounter);