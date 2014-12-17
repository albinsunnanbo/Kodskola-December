$(function () {
    $("#event-subscription-example-setup").click(function () {
        $("#output").html(''); // clear
        var button1 = $("<input type='button' class='subscription-button' value='Button 1' />");
        $("#output").append(button1);

        // Only on already loaded controls
        $(".subscription-button").click(function () {
            $("#event-output").append("<p style='margin:0px;'>Direct: " + $(this).val() + "</p>");
        });

        // Persistent, even after loading new controls
        // Watchout when clicking event - subscription again
        $("body").on("click", ".subscription-button", function () {
            $("#event-output").append("<p style='margin:0px;'>Body: " + $(this).val() + "</p>");
        });

        var button2 = $("<input type='button' class='subscription-button' value='Button 2' />");
        $("#output").append(button2);
        $("#output").append("<div id='event-output' style='max-height: 200px; overflow: auto;'/>");
    });
});