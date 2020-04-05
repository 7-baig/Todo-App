// // Create a new list item when clicking on the "Add" button
let addButton = document.getElementById('addButton');
const generator = () => {
    let li = document.createElement('LI');
    let userInput = document.getElementById('userInput').value;
    let text = document.createTextNode(userInput);
    li.appendChild(text);
    li.classList.add('list-style');
    if(userInput === '') {
        alert('Please type something.');
    } 
    else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('userInput').value = ""

    let button = document.createElement('SPAN');
    let btnText = document.createTextNode('X');
    button.classList.add('button-style');
    button.appendChild(btnText);
    li.appendChild(button);
    
    let close = document.getElementsByClassName('button-style');

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var parent = this.parentElement;
            parent.style.display = "none";
        }
    }
};
addButton.addEventListener("touchstart", generator);
