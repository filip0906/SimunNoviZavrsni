function submitAnswers(){
	var total = 8;
	var score = 0;
	
	// Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	var q7 = document.forms["quizForm"]["q7"].value;
	var q8 = document.forms["quizForm"]["q8"].value;

	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('Niste odgovorili na pitanje broj '+ i);
			return false;
		}
	}
	if(eval(ime) == ' '){
		alert('Niste upisali ime i prezime!');
		return false;
	}
	
	var answers = ["d","b","a","a","b","b","d","a"];
	
	//provjera odgovora
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}

	var ime = document.getElementById('imeIprezime').value;
	console.log('ovo je ime', ime);
	
	// Prikaz rezultata
	var results = document.getElementById('results');
	results.innerHTML = '<h3>Postovani <span>'+ime+' imate '+score+'</span> od <span>'+total+' točnih odgovora</span></h3>';
	
	return false;
}
