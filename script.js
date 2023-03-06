var todoArray = []; //empty arr for save task


// for save task
function saveTodo() {
    var name = document.getElementById("title").value;
    todoArray.push(name);
    localStorage.setItem("Todos", todoArray.toString());
    document.getElementById("title").value = "";
    fetchTodo();
}


// for fetch task
function fetchTodo() {
    var str = localStorage.getItem("Todos");
    todoArray = str.split(",");
    var htmlString = `
    <tr>
        <th>Sr. No.</th>
        <th>Title</th>
        <th>Actions</th>
    </tr>
 `;

    var counter = 0;
    todoArray.forEach((ele) => {
        counter++; 
        htmlString += `
    <tr>
        <td>${counter}</td>
        <td> ${ele}</td>
        <td>
            <button class="btn btn-warning fa fa-edit" onclick="editTodo(${counter-1})"> Edit</button>
            <button class="btn btn-danger mx-3 fa fa-trash" onclick="deleteTodo(${counter-1})"> Delete</button>

        </td>
    </tr>
    `

    });
    document.getElementById("todotable").innerHTML=htmlString;
}



// for edit task
function editTodo(index){
    var newValue= prompt("update?",todoArray[index]);
    if(newValue!=""){
      todoArray[index] = newValue;
      localStorage.setItem("Todos",todoArray.toString());
      fetchTodo(); 
    }
}


// for delete task
function deleteTodo(index){
 
   if(confirm("are you sure")) {
   todoArray.splice(index,1);
   localStorage.setItem("Todos",todoArray.toString());
   fetchTodo(); 
}
}


// for clear task
function clearTodo(){
    localStorage.removeItem('Todos');
     todoArray=[];
    document.getElementById("todotable").innerHTML='';
}