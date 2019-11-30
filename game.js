function computerPlay() {
	let shoot = Math.floor(Math.random() * 3);
	if (shoot == 2) {
		return 'rock'; //4
	}
	else if (shoot == 1) {
		return 'paper'; //5
	}
	else if (shoot == 0) {
		return 'scissors'; //8
	}
}
let score = 0;
let computerscore = 0;
let result = '';
let counter = 0;
//	rock paper	4 - 5 -1 1
//	scissor rock	8 - 4  4 1
//	paper scissors	5 - 8 -3 1
//	paper rock	5 - 4  1 0
//	scissors paper	8 - 5  3 0
//	rock scissors   4 - 8 -4 0

function playRound(playerSelection, computerSelection) {
	let sub = playerSelection.length - computerSelection.length;
	let y = document.getElementById("speechcomputertext");
	let z = document.getElementById("speechplayertext");
	let bubble = document.getElementById("speechbubble");
	let bubblecomp = document.getElementById("speechbubblecomp");
	let announcer = document.getElementById("announcer");
	if (sub == -1 || sub == -3 || sub == 4) {
		computerscore++;
		y.innerHTML = "I WON";
		z.innerHTML = "I lost";
		y.style.visibility = "visible";
		z.style.visibility = "visible";
		bubble.style.visibility = "visible";
		bubblecomp.style.visibility = "visible";	
		setTimeout(function(){ y.style.visibility = "hidden"; z.style.visibility = "hidden"; bubble.style.visibility = "hidden"; bubblecomp.style.visibility = "hidden";}, 3000);
		announcer.innerHTML = "Your " + playerSelection + " loses to " + computerSelection;
	} else if (sub == 0) {
		
		y.innerHTML = "We TIED";
		z.innerHTML = "We TIED";
		y.style.visibility = "visible";
		z.style.visibility = "visible";
		bubble.style.visibility = "visible";
		bubblecomp.style.visibility = "visible";
		setTimeout(function(){ y.style.visibility = "hidden"; z.style.visibility = "hidden"; bubble.style.visibility = "hidden"; bubblecomp.style.visibility = "hidden";}, 3000);
		announcer.innerHTML = "computer's " + computerSelection + " loses to " + playerSelection;
		//alert("You TIE! " + playerSelection + " Ties " + computerSelection); 		
	} else {

		score++;
		y.innerHTML = "I lost";
		z.innerHTML = "I WON!";
		y.style.visibility = "visible";
		z.style.visibility = "visible";
		bubble.style.visibility = "visible";
		bubblecomp.style.visibility = "visible";
		setTimeout(function(){ y.style.visibility = "hidden"; z.style.visibility = "hidden"; bubble.style.visibility = "hidden"; bubblecomp.style.visibility = "hidden";}, 3000);
	}



}
function rock(){
	result = 'rock';
	game();
}
function paper(){
	result = 'paper';
	game();
}
function scissors(){
	result = 'scissors';
	game();
}
function game(){
	const computerSelection = computerPlay();
	const playerSelection = result.toLowerCase();
	playRound(playerSelection, computerSelection);
	let x = document.getElementById("score");
	x.innerHTML= "Your score: " + score + "\n Computer score: " + computerscore;
	counter++;
	if(counter > 4) {

	    if (score > computerscore){
		x.innerHTML = "YOU WON YEAHHHH!!";
		score = 0;
		computerscore = 0;
	    } else if (computerscore > score){
		x.innerHTML = "YOU LOST";
		score = 0;
		computerscore = 0;
	    } else {
		score = 0;
		computerscore = 0;
		x.innerHTML = "YOU TIED";
	    }
	    counter = 0;
	}
	
}


