let x;
let y;
let z;

document.getElementById("myButton").onclick = function() {
    x = document.getElementById("myLength").value;
    x = Number(x);
    
    y = document.getElementById("myWidth").value;
    y = Number(y);

    z = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    console.log(z);

    document.getElementById("myHpy").innerHTML = "hypotenues is equal to: " + z;

} 