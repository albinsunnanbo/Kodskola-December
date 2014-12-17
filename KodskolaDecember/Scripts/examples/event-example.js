$(function () {
    $("#event-example-setup").click(function () {
        $("#output").html(''); // clear
        var button = $("<input type='button' value='Create new buttons' />");
        $("#output").append(button);

        var onButton2Click = function () {
            $(this).val($(this).val() + " #");
        };
        var createButtons = function () {
            var button2 = $("<input type='button' value='Click me' />");
            $("#output").append(button2);
            button2.click(onButton2Click);
        };
        button.click(createButtons);
    });
});