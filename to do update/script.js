let mode="light";
let body=document.querySelector("body");
let themeselector=document.querySelector("#theme");
themeselector.addEventListener("click",()=>{
    
    let themeimage=document.querySelector("#themeselector" );
    if(mode==="light"){
        body.classList.remove("light");
        body.classList.add("dark");
        themeimage.src = "/images/sun.png";
        mode="dark";
}
else{
    body.classList.remove("dark");
    body.classList.add("light");
    themeimage.src = "/images/moon.png";
    mode="light";
}
})
const input=document.querySelector("#todo-input");
input.spellcheck=false;
const input_button=document.querySelector("#input_button");
const listcontainer=document.querySelector("#todo_tasks");
const deleteall=document.querySelector("#deleteall")
input_button.addEventListener("click",()=>{
    if(input.value===""||input.value ===" "){
    alert("please enter sone tasks.....");
    return;
    }
    else{
    const div=document.createElement("div");
    const text_div=document.createElement("input");
    const li=document.createElement("li");
    const span=document.createElement("span");
    const edit=document.createElement("span");
    const Delete=document.createElement("span");
    text_div.setAttribute("class","text_div")
    text_div.value=input.value;
    span.setAttribute("class","functionarea");
    Delete.setAttribute("class","delete")
    edit.setAttribute("class","edit");
    span.append(edit,Delete);
    div.append(li)
    edit.innerText="edit"
    Delete.innerText="delete"
    text_div.innerText=input.value;
    li.appendChild(text_div)
    li.appendChild(span);
    listcontainer.append(div);
    if(text_div.readOnly ==false){
        text_div.spellcheck=false;
        text_div.readOnly = true;
       }
   }
  if(deleteall.style.display="none"){
    deleteall.style.display="block"
  }
    input.value="";
})
deleteall.addEventListener("click",()=>{
const taskspresent=document.querySelector("ol");
taskspresent.innerHTML=""
deleteall.style.display="none";
})
listcontainer.addEventListener("click",(e)=>{
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")

}
else if (e.target.classList.contains("delete")) {
    if(e.target.parentElement.parentElement.classList=="checked"){
    e.target.parentElement.parentElement.parentElement.remove();}
    else{
        alert("The Task Is Not Completed ☹️")
    }
}
else if(e.target.classList.contains("edit")){
if(e.target.parentElement.parentElement.classList=="checked"){
alert("The task is completed 😊 ")
return;
    }
let choosed_element= e.target.parentElement.parentElement;
let edit_button=e.target;
if(edit_button.innerText === "Edit"){
edit_button.innerText="save"
const list_item=edit_button.parentElement.parentElement.firstChild;
list_item.readOnly=false;
list_item.style.cursor="text"
   edit_button.addEventListener("click",()=>{
    if(list_item.readOnly ==false){
        list_item.readOnly = true;
        list_item.style.cursor="default"
       }
    return;
})
return;
}
if(edit_button.innerText==="Save"){
    edit_button.innerText = "Edit"  
}
return;
}
}
)

