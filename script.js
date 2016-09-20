$(document).ready(function() {
    
    var numActivePanels = 2;
    
    function updateNumActivePanels() {
        numActivePanels = $(".panel").length - $(".hidden").length;
    }
    
    function setPanelHeight() { 
       $(".panel").height($(window).height() - $("#topbar").height() - 20); 
    }
    
    function setPanelWidth(panelCount) {
        $(".panel").width($(window).width() / panelCount - 30);
    }
    
    function updateOutput() {
        $("#outputPanel").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() +  "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
        
        document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());  
    }
    
    setPanelHeight();
    setPanelWidth(numActivePanels);
    updateOutput();
    
    $(".toggleButton").hover(function() {
        $(this).toggleClass("hoverOver");                    
    })
   
    $(".toggleButton").click(function() {
        $(this).toggleClass("active");
        var clickedPanel = "#" + $(this).attr("id") + "Panel";
        $(clickedPanel).toggleClass("hidden");
        updateNumActivePanels();
        setPanelWidth(numActivePanels);
    })
    
    $(window).resize(function() {
        setPanelHeight();
        setPanelWidth(numActivePanels);
    });
    
    $("textarea").keyup(function() {
        updateOutput();
    })
    
    
    
    
    
})