var ul=document.getElementById("listcontainer")
var input= document.getElementById("name")

function add(){
    var listitem= document.createElement("li")
    listitem.innerHTML=input.value+"<button onclick='deleteitem(event)'>Delete</button>"
    ul.append(listitem)
}
function deleteitem(event){
    event.target.parentElement.remove()
}