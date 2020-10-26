$(document).ready(function() {
    $("#q1").click(function() {
        show('#q2'); 
        hide('#q1'); 
        });
    
    $("#q2").click(function() {
        show('#q3'); 
        hide('#q2'); 
        });
        
    $("#q3").click(function() {
        show('#q4'); 
        hide('#q3'); 
        });
        
    $("#q4").click(function() {
        show('#content'); 
        hide('#q4');
        setTimeout("location.href = '/get/btfd-1';",8000);
        });
    
    function show (toBlock){
        $(toBlock).show();
        }

    function hide (toNone) {
        $(toNone).hide();
        }
});