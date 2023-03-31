let x;

document.getElementById("rollButton").onclick = function() {

    x = Math.floor(Math.random()*6)+1;
    console.log(x);
    document.getElementById("myText").innerHTML = "Your Number is: " + x;
}