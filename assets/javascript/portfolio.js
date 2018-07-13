$(document).ready(function() {
    $(".projects").hide();
    $("#contact").hide();

    
    $("#projectButton").on("click", function() {
        $("#aboutMe").hide();
        $("#contact").hide();
        $(".projects").show();
    });

    $("#aboutButton").on("click", function() {
        $(".projects").hide();
        $("#contact").hide();
        $("#aboutMe").show();
    })
});