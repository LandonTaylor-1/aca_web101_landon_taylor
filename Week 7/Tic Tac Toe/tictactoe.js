function getWinner() {
    var box1 = document.getElementById("top_left"),
    var box2 = document.getElementById("top_center"),
    var box3 = document.getElementById("top_right"),
    var box4 = document.getElementById("middle_left"),
    var box5 = document.getElementById("middle_center"),
    var box6 = document.getElementById("middle_right"),
    var box7 = document.getElementById("bottom_left"),
    var box8 = document.getElementById("bottom_center"),
    var box9 = document.getElementById("bottom_right");
//each box option

    if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        console.log("Winner");

        else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        console.log("Winner");

        else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        console.log("Winner");

        else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        console.log("Winner");

        else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        console.log("Winner");

        else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        console.log("Winner");

        else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        console.log("Winner");

        else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        console.log("Winner");
}
//all possible winning outcomes

var boxes = document.querySelectorAll("#main div"), X_or_O = 0;

for(var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function() {
        if(this.innerHTML !== "X" && this.innerHTML !== "O") {
        if(X_or_O%2 === 0) {
            console.log(X_or_O);
            this.innerHTML = "X";
            getWinner();
            X_or_O += 1;
        } else {
            console.log(X_or_O);
            this.innerHTML = "O";
            getWinner();
            X_or_O += 1;
        }
    }
    };
}

function replay () {
    for (var i = 0; i < boxes.length; i++) {

        boxes[i].innerHTML = "";
        
    }
}