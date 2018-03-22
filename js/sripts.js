$(document).ready(function(){

});


function dispJava(){
    var javaScript = document.getElementById("myContents");
    if(javaScript.style.display === "block"){
        javaScript.style.display = "none";
    }else javaScript.style.display = "block";

}
//Operators
function dispOperator(){
    var operators = document.getElementById("opera");
    if(operators.style.display === "none"){
        operators.style.display = "block";
    }else operators.style.display = "none";
}