$(function () {
    $("#ajax-example-setup").click(function () {
        var output = $("#output");
        output.html("<p>before ajax</p>");
        $.getJSON("ExampleAjax", null, function (data, textStatus, jqXHR) {
            output.append("<p>json result, bar: " + data.bar + "</p>");
        });

        output.append("<p>after ajax</p>");
    });
});