$(function () {
    $("#closure-example-1").click(function () {
        var output = $("#output");
        output.html(""); // clear

        var i = 1;
        var a = function () {
            i++;
        };
        a();
        output.append("<p>" + i + "</p>");
    });


    var b = function (x) { // x is called by value
        // i is undefined here
        x++;
    };

    $("#closure-example-2").click(function () {
        var output = $("#output");
        output.html(""); // clear

        var i = 1;
        b(i);
        output.append("<p>" + i + "</p>");
    });

    // Advanced, encapsulation with closures
    $("#closure-example-3").click(function () {
        var output = $("#output");
        output.html(""); // clear

        var c = (function () {
            var i = 1;
            return function () {
                i++;
                return i;
            };
        })(); // trigger execution of closure
        output.append("<p>" + c() + "</p>");
        output.append("<p>" + c() + "</p>");
        output.append("<p>" + c() + "</p>");
        output.append("<p>" + typeof (i) + "</p>"); // i is undefined, only declared in the closure
    });

});