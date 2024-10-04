var list = document.getElementById("list");


function addtodo(){
    var todo_item = document.getElementById("todo-item") ;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todo_item.value));
    console.log(li);


    var editbutton = document.createElement("button");
    var edittext = document.createTextNode("Edit")
    editbutton.setAttribute("onclick","edititem(this)")
    editbutton.appendChild(edittext);
    li.appendChild(editbutton);
    


    var deletebutton = document.createElement("button");
    var deltext = document.createTextNode("Delete");
    deletebutton.setAttribute("onclick","deleteitem(this)")


    deletebutton.appendChild(deltext);
    li.appendChild(deletebutton);


   



    list.appendChild(li);
    todo_item.value = "";

}


function deleteitem(e){
    e.parentNode.remove()

}

function edititem(e){
    var value = e.parentNode.firstChild.nodeValue
    var editvalue = prompt("Enter edit values",value)
    e.parentNode.firstChild.nodeValue = editvalue    

}

function deleteall(){
    list.innerHTML = "";
}