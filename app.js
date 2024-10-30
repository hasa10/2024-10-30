

let y = Math.floor(Math.random() * 10 + 1);
console.log(y);

let guess = 0;
function Guess() {
   
    if(guess<3){
        let x = document.getElementById("number").value;
        if (x == y) {
            guess++;
            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "+ guess + " GUESS ");
        }
        else if (x > y) {
            guess++;
            alert("OOPS SORRY!! TRY A SMALLER NUMBER Count : "+ guess );
        }
        else {
            guess++;
            alert("OOPS SORRY!! TRY A GREATER NUMBER Count : "+ guess );
        }
    }else{
        alert("Game Over")
        
    }
    
}
