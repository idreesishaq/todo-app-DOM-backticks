function addTodo(){
    var todo = document.getElementById("todo");
    var list = document.getElementById("list");
    var date = new Date();
    list.innerHTML += `
    <li>
    <input class='todo-input' type="text" value='${todo.value}' disabled/>
    ${date.toLocaleString()}
    <button onclick='delTodo()'> Delete </button>
    <button onclick='editTodo(this)'> Edit </button>
    </li>
    `
    todo.value = "";

    // var li = document.createElement("li");
    // var text = document.createTextNode(todo.value);
    // li.appendChild(text);
    // var delButton = document.createElement("button");
    // var delText = document.createTextNode("Delete");
    // delButton.appendChild(delText);
    // delButton.setAttribute("onclick", "delTodo()");
    // var editButton = document.createElement("button");
    // var editText = document.createTextNode("Edit");
    // editButton.setAttribute("onclick", "editTodo()");

    // editButton.appendChild(editText);
    // li.appendChild(delButton);
    // li.appendChild(editButton);
    // // list.appendChild(li);
    // list.prepend(li);
    // console.log(li); 
    // todo.value = ""; 
    
}

function delTodo(){
    event.target.parentNode.remove();
}

var edit = false;
function editTodo(e){
    // var oldValue = event.target.parentNode.firstChild.nodeValue;
    // var editValue = prompt("Enter updated value", oldValue);
    // event.target.parentNode.firstChild.nodeValue = editValue;
    // console.log(editValue);
    if(edit) {
        e.parentNode.childNodes[1].disabled = true;
        e.parentNode.childNodes[1].blur();
        e.parentNode.childNodes[5].innerHTML = "Edit";
        console.log(e.parentNode.childNodes[1].value);
        edit = false;

    } else {
        e.parentNode.childNodes[1].disabled = false;
        e.parentNode.childNodes[1].focus();
        e.parentNode.childNodes[5].innerHTML = "Update";
        edit = true;
        
    }


}

function deleteAll() {
    var list = document.getElementById("list");
    list.innerHTML = "";

}
