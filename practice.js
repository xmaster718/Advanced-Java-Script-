let buttom = document.getElementById("Button");
let result = document.getElementById("result");

buttom.addEventListener("click", function() {
    let input = document.getElementById("inputField").value;
    let ballnumber = Number(input);
    let BallNumber = ballnumber;

    if (ballnumber < 1 || ballnumber >8) {
        result.textContent = "Please enter a number between 1 and 8.";
        return;
    }

    result.textContent = "You entered: " + ballnumber;

    let weight = [10,10,10,10,10,10,10,10];
weight[BallNumber-1] = 11;

let leftside = weight[0] + weight[1] + weight[2];
let rightside = weight[3] + weight[4] + weight[5];

if (leftside > rightside){
    if (weight[0] > weight [1]){
        result.textContent = "The 1 ball is heavy"
    }
    else if (weight[1] > weight[0]){
        result.textContent = "The 2 ball is heavy"
    }
    else {result.textContent = "The 3 ball is heavy"}
}

else if (rightside > leftside){
    if (weight[3] > weight [4]){
        result.textContent = "The 4 ball is heavy"
    }
    else if (weight[4] > weight[3]){
        result.textContent = "The 5 ball is heavy"
    }
    else {result.textContent = "The 6 ball is heavy"}
}

else {
    if (weight[6] > weight[7]){
        result.textContent = "The 7 ball is heavy"
    }

    else {result.textContent = "The 8 ball is heavy"}    
    
}

});

