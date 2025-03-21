const input = document.querySelector('#favchap'); 
const button = document.querySelector('button'); 
const list = document.querySelector ('#list'); 

button.addEventListener('click', function() {
    
    if (input.value.trim() !== '') {
        const li = document.createElement('li'); // create a list item element
        const deleteButton = document.createElement('button'); // create a button element

        li.textContent = input.value; // set the text content of the list item to the input value
        deleteButton.textContent = '❌'; 
        li.append(deleteButton); // append the button to the list item
        list.append(li); // append the list item to the list
        
        // add an event listener to the button that removes the list item when clicked
        deleteButton.addEventListener('click', function() { 
            list.removeChild(li);
            input.focus();
        });
        // clear the input field
        input.value = ''; 
    }

    input.focus();
});