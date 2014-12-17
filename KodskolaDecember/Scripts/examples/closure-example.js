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
        a();
        output.append("<p>" + i + "</p>");
    });


    var b = function (x) { // x is called by value
        // i is undefined here
        var output = $("#output");
        output.append("<p>inne i funktion b, i = " + typeof (i) + "</p>"); // i is undefined, only declared in the closure

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

        // Motsvarar Func eller lambda i c#
        var c = (function () {
            var i = 1;
            return function () { // <-- denna funktion blir c, dvs i är inte tillgänglig utanför scopet
                i++;
                return i;
            };
        })(); // trigger execution of closure, motsvarar new() i c#
        output.append("<p>" + c() + "</p>");
        output.append("<p>" + c() + "</p>");
        output.append("<p>" + c() + "</p>");
        output.append("<p>i: " + typeof (i) + "</p>"); // i is undefined, only declared in the closure
        output.append("<p>c.i: " + typeof (c.i) + "</p>"); // c.i is undefined, only declared in the closure
    });

});