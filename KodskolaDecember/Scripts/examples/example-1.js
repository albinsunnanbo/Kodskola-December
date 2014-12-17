console.log("Print 1");
$(function () { // För att vänta på DOM:en, annars är inte alla element laddade på sidan
    console.log("Print 2");
    setTimeout(function () {
        console.log("Print 3");
    }, 0);
    console.log("Print 4");
});
console.log("Print 5");