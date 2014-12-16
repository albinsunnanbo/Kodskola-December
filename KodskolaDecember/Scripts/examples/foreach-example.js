$(function () {
    $("#foreach-example-setup").click(function () {
        $("#output").html(
            "<p>Row1</p>" +
            "<p>Row2</p>" +
            "<p>Row3</p>" +
            "");
    });

    $("#foreach-example-execute").click(function () {
        var output = '';

        $("#output").find("p")
            .each(function () {
                output += ". ";
            })
            .each(function () { // Chaining: denna .each jobbar på samma lista av <p> som den förra
                // this blir helt magiskt vart och ett av <p> som finns
                // magin ligger i 
                output += $(this).html() + " ";
            });

        $("#output").append(output);
    });
});