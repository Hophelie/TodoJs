

var boutton = document.querySelector('.add-task')
var form = document.querySelector('.form-task')
var bouttonValider=document.querySelector('.valid')
var task=[];
var ul = document.getElementById("list");


boutton.addEventListener("click",function(){

    if (form.style.display)
    form.style.display=""
    else
    form.style.display="none"

});

bouttonValider.addEventListener("click",function(){

    task = [];
    task.push(
    document.querySelector('#task').value,
    document.querySelector('#date').value,
    document.querySelector('#lieu').value,
    document.querySelector('#description').value)

    form.style.display="none"
    addAnother(task)
    
})

function addAnother(task) {
    var li = document.createElement("li");
    var children = ul.children.length + 1
    var content = 'Tache '+task[0]+ ' le '+task[1]+ ' à '+task[2]+ ' description: '+task[3]

   
    li.setAttribute("id",children)
    li.setAttribute("onclick","delet(id)")
    li.appendChild(document.createTextNode(content));
    ul.appendChild(li)

    document.querySelector('#task').value ="",
    document.querySelector('#date').value ="",
    document.querySelector('#lieu').value ="",
    document.querySelector('#description').value =""

}

function delet(id){
    alert(id)
    var taskId = document.getElementById(id)
    ul.removeChild(taskId)
    
}



