function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(baseLength) {
    var triangle = "";
      for (var i=1;i<=baseLength;i++) {
            makeLine(i);
            triangle += makeLine(i);
        } 
        return triangle;
}

console.log(buildTriangle(10));