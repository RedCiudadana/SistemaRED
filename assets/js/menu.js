/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {

    var y = document.getElementById("nav-menu");
    if(y.style.display == "none"){
        y.style.display = "block";    
    }
    else{
        y.style.display = "none";    
    }
    
    console.log("funcion menu");
}
