var buttonAction = document.getElementById("btn");
var newDiv = document.createElement("div");
        var newpara = document.createElement("p");
            document.getElementById("btn").appendChild(newDiv);
            newDiv.appendChild(newpara);
        var showMessage;

buttonAction.addEventListener("click", function() {
    var input = document.getElementById("txt").value;
    var answer = parseInt(input);
        console.log(answer);
        
        

    if(answer < 18) {
        var showMessage = ("Du är för ung!"); 
            console.log(showMessage);
    }
    else if (answer > 66) {
        var showMessage = ("Du är för gammal!");
            console.log(showMessage);

    }
    else if (answer >= 18 && answer <=66) {
        var showMessage = ("Helt rätt ålder!");
            console.log(showMessage);

    }
    else {
        var showMessage = ("Endast siffror, tack");
            console.log(showMessage);
        
    }
    newpara.innerText = (showMessage);
    document.body.appendChild(newDiv);
    console.log(showMessage);
})

