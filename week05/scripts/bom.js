// Select the necessary DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

// Add the event listener to the button
button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
      displayList(input.value); // call the function that outputs the submitted chapter
      chaptersArray.push(input.value);  // add the chapter to the array
      setChapterList(); // update the localStorage with the new array
      input.value = ''; // clear the input
      input.focus(); // set the focus back to the input
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
    list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

// this function sets the localStorage item 'myFavBOMList' to the chaptersArray
// this is done by converting the array to a string using JSON.stringify
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// this function gets the localStorage item 'myFavBOMList' and converts it back to an array
// this is done by using JSON.parse
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character


chaptersArray = chaptersArray.filter((item) => item !== chapter); // this filters the array to remove the chapter that was deleted

// this function removes the chapter from the array and localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});