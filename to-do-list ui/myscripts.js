// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("請注意輸入內容！");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Create kanban function
const dragAndDrop = () => {
    const card = document.querySelector('.js-card');
    const cells = document.querySelectorAll('.js-cell');

    const dragStart = function() {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0);
    };

    const dragEnd = function() {
        this.classList.remove('hide');
    };

    const dragOver = function(evt) {
        evt.preventDefault();
    };

    const dragEnter = function(evt) {
        evt.preventDefault();
        this.classList.add('hovered');
    };

    const dragLeave = function() {
        this.classList.remove('hovered');
    };

    const dragDrop = function() {
        this.append(card);
        this.classList.remove('hovered');
    };

    cells.forEach(cell => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    });

    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
};

dragAndDrop();