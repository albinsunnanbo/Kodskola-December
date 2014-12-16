$(function () {
    $("#event-example-setup").click(function () {
        $("#output").html(''); // clear
        var button = $("<input type='button' value='Event button' />");
        $("#output").append(button);

        button.click(function () {
            $(this).val($(this).val() + " #");
        });
    });
});