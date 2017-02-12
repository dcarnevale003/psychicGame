// <script type = "text/javascript">

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var wins = 0;
	var losses = 0;
	var guessesLeft=99;

	document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var computerGuess = options[Math.floor(Math.random()*options.length)];

	if (userGuess =='a','b','c','d','e','f','g' ,'h' ,'i' ,'j' ,'k' ,'l' ,'m' ,'n','o' ,'p' ,'q','r','s' ,'t','u','v','w','x' ,'y' ,'z'){

		if (userGuess==computerGuess){
			wins++;
			alert("Got one!")
		} 

		
		if (guessesLeft==0){
			alert("You lost!");
			document.write('<img src="http://cdn.someecards.com/someecards/usercards/MjAxMy1mYWQ2ZjQzNDM2NzA3Yzc3.png">');
			return;
		}
		
		if (userGuess!==computerGuess){
			losses++, guessesLeft--;
		} 

		if (wins==4){
			document.write('<img src="http://www.bigtimeteez.com/image/cache/catalog/Thumbnails/Winner-Winner-800x800.gif">');
		}
		
		}
		
		else {
		alert("Nope, guess a letter dummy");
		}

		

	html = "<p>What Letter am I Thinking of?</p>" +
			"<p>Get to four wins to claim your prize!</p>" +
				"<p>wins: " + wins + "</p>" +
				"<p>losses: " + losses + "</p>" +
				"<p>Guesses Left: " + guessesLeft + "</p>"; +
				"<p>Letter guessed: " + userGuess + "</p>";

	document.querySelector('#game').innerHTML = html;

}
// </script>
