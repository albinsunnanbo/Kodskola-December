$(function () {
    $("#event-example-setup").click(function () {
        $("#output").html(''); // clear
        var button = $("<input type='button' value='Create new buttons' />");
        $("#output").append(button);

        button.click(function () {
            var button2 = $("<input type='button' value='Click me' />");
            $("#output").append(button2);
            button2.click(function () {
                $(this).val($(this).val() + " #");
            });
        });
    });
});