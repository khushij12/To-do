var noOfTask=0;

function create(){
    var task = window.prompt("Enter your task.");
   // document.getElementById("Note").innerHTML="To-Do List";
    var newTask=document.createElement("input");
    newTask.setAttribute("type","checkbox");
    var taskNote=document.createElement("p").appendChild(document.createTextNode(task+"\n"));
    var newLine=document.createElement("br");
    document.getElementById("tasks").appendChild(newTask);
    document.getElementById("tasks").appendChild(taskNote);
    document.getElementById("tasks").appendChild(newLine);
    noOfTask++;
    document.getElementById("Note").innerHTML="";
    document.getElementById("footer-note").innerHTML="Pending Task: "+noOfTask;
}

function removeTask(){
    var allTask=document.getElementById("tasks").childNodes;
    
    var i=0;
    while(allTask[i]!=undefined){
        
        if(allTask[i].tagName=="INPUT" && allTask[i].checked)
        {
            allTask[i].remove();
            allTask[i].remove();
            allTask[i].remove();
            noOfTask--;
        }
        i++;
       // console.log(allTask[i]);
    }
    if(noOfTask==0){
        document.getElementById("Note").innerHTML="No Tasks";
    }
    document.getElementById("footer-note").innerHTML="Pending Task: "+noOfTask;
}

