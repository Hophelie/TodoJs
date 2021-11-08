var boutton = document.querySelector('.add-task')
var form = document.querySelector('.form-task')
var bouttonValider=document.querySelector('.valid')
var task=[];
var ul = document.getElementById("list");
var liStock = document.createElement("li")

Window.localStorage;

//On vient regarder si il y a qqchoe dans le storage, si oui on 'affiche (non-fonctionnel)
for (var i = 0; i < localStorage.length; i++){   
    console.log(localStorage.getItem(localStorage.key(i)));
    liStock.appendChild(document.createTextNode(localStorage.getItem(localStorage.key(i))));
    ul.appendChild(liStock)  
}

//toggle du forulaire
boutton.addEventListener("click",function(){

    if (form.style.display)
    form.style.display=""
    else
    form.style.display="none"

});

//On vient mettre les valeurs des input dans un tableau 
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

//On créé un element LI, dans lequel on va mettre le contenu de la task(+1 pour jamais écraser la valeur de l'enfant).
//on rattache e tout au UL, et on vide le formulaire.
//On stock le tableau en localStorage
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

    localStorage.setItem("task"+children, content)
    
    console.log(localStorage.getItem("task"+children)); 
    
}
//Delet l'enfant avec l'id, delet le storage avec l'id
function delet(id){

    var taskId = document.getElementById(id)
    ul.removeChild(taskId)
    localStorage.removeItem("task"+id);
}



