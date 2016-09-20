$(document).ready(function() {
    
    function setPanelHeight() { 
       $(".panel").height($(window).height() - $("#topbar").height() - 20); 
    }
    
    setPanelHeight();
    
    function setPanelWidth() {
        $(".panel").width($(window).width() / 2 - 5);
    }
    
    setPanelWidth();
    
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
    
    
})