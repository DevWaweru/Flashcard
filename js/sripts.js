$(document).ready(function(){
    var hidden = function ficha(){
        $("#java").hide();
        $("#opera").hide();
        $("#var").hide();
        $("#chainn").hide();
        $("#boolea").hide();                
    };

    $(".java").on('click', function(){
        hidden();
        $("#java").show();
    });
    $(".opera").on('click', function(){
        hidden();
        $("#opera").show();
    });
    $(".var").on('click', function(){
        hidden();
        $("#var").show();
    });
    $(".chainn").on('click', function(){
        hidden();
        $("#chainn").show();
    });
    $(".boolea").on('click', function(){
        hidden();
        $("#boolea").show();
    });
});

// function dispJava(){
//     var javaScrerator(){
//     var operators = document.getElementById("opera");
//     if(operators.style.display === "none"){
//         operators.style.display = "block";
//     }else operators.style.display = "none";
// }ipt = document.getElementById("myContents");
//     if(javaScript.style.display === "block"){
//         javaScript.style.display = "none";
//     }else javaScript.style.display = "block";

// }
// //Operators
// function dispOp