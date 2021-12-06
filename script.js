
document.querySelector("header > h1").innerHTML = "Nonsense Story";
document.querySelector("header > h2").innerHTML = "Strings Manipulation";
document.querySelector("body > h2").innerHTML = "What I've learned.";


//Story Function
function story(){
	var nounArray = document.getElementById('nouns').value.toLowerCase().split(/\s+|\n/);
    var adjectiveArray = document.getElementById('adjs').value.toLowerCase().split(/\s+|\n/);
	var verbArray = document.getElementById('verbs').value.toLowerCase().split(/\s+|\n/);

	
	var yourStory = `Once upon a time there was a ${nounArray[0]} that ruled over the Kingdom of Dragonnite. The ruler is ${adjectiveArray[0]} and loves to have fun with a ${nounArray[1]}. The ruler has a fun ${adjectiveArray[1]} ${nounArray[2]} along with a ${nounArray[3]}. The ruler is nice and loves to play ${adjectiveArray[2]} games. These games can be ${verbArray[0]} ${nounArray[4]} but it just depends on what the game is. No matter ${nounArray[5]} winners or losers, the ${verbArray[1]} ${nounArray[6]} keeps the moral up in Dragonnite`
	document.getElementById('weirdStory').textContent=yourStory;
} 