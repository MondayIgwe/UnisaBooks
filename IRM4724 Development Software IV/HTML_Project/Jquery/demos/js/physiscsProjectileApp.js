function display(){
    var angle = document.getElementById('angle').value;
    var velocity = document.getElementById('angle').value;

    // Compute
    var result = angle * velocity;
    document.getElementById('angleDisplayed').innerHTML = angle;
    document.getElementById('velocityDisplayed').innerHTML = velocity;
    document.getElementById('result').innerHTML = result;

}