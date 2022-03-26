document.addEventListener("DOMContentLoaded", ()=> {
    const sidebar = document.querySelector(".sidebar");
    var div_shape = document.createElement("div");
    
    div_shape.setAttribute("id", "extra");
    div_shape.setAttribute("style", "width: 0; height: 0; border-left: 50px solid transparent; border-right: 50px solid transparent; border-bottom: 100px solid red; position: relative;")
    
    sidebar.appendChild(div_shape);
})