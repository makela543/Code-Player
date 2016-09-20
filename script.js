$(document).ready(function() {
    
    function setPanelHeight() { 
       $(".panel").height($(window).height() - $("#topbar").height() - 20); 
    }
    
    function setPanelWidth() {
        $(".panel").width($(window).width() / 2 - 15);
    }
    
    function updateOutput() {
        $("#outputPanel").contents().find("html").html($("#htmlPanel").val());
    }
    
    setPanelHeight();
    setPanelWidth();
    updateOutput();
    
    $(".toggleButton").hover(function() {
        $(this).toggleClass("hoverOver");                    
    })
   
    $(".toggleButton").click(function() {
        $(this).toggleClass("active");
    })
    
    $(window).resize(function() {
        setPanelHeight();
        setPanelWidth();
    });
    
    $("textarea").keyup(function() {
        updateOutput();
    })
    
    
    
    
    
})