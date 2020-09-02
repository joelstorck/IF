var buttonAction = document.getElementById("btn");
var newDiv = document.createElement("div");
        var newpara = document.createElement("p");
            document.getElementById("btn").appendChild(newDiv);
            newDiv.appendChild(newpara);
        var showMessage;

buttonAction.addEventListener("click", function() {
    var input = document.getElementById("txt").value;
    var answer = String(input);
        console.log(answer);
        
        

    if(answer < 18) {
        var showMessage = ("Du är för ung!"); 
        newpara.innerText = (showMessage);
        document.body.appendChild(newDiv);
        console.log(showMessage);
    }
    else if (answer > 66) {
        var showMessage = ("Du är för gammal!");
        newpara.innerText = (showMessage);
        document.body.appendChild(newDiv);
        console.log(showMessage);

    }
    else {
        var showMessage = ("Helt rätt ålder!");
        newpara.innerText = (showMessage);
        document.body.appendChild(newDiv);
        console.log(showMessage);

    }
    
})

