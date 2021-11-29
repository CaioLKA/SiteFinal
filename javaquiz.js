var myQuestions = [
	{
		question: "Qual a recompensa atual do Luffy?",
		answers: {
			a: '฿1,500,000,000<br>',
			b: '฿1,300,000,000<br>',
			c: '฿1,800,000,000<br>',
			d: '฿2,000,000,000'

		},
		correctAnswer: 'a'
	},
	{
		question: "Quantos piratas são referidos como 'A Pior Geração'?",
		answers: {
			a: '08<br>',
			b: '10<br>',
			c: '12<br>',
			d: '15'
		},
		correctAnswer: 'c'
	},
	{
		question: "A tripulação dos chapéus de palha tem quantos membros, incluindo o capitão?",
		answers: {
			a: '11<br>',
			b: '09<br>',
			c: '12<br>',
			d: '10'
		},
		correctAnswer: 'd'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){

		var output = [];
		var answers; 


		for(var i=0; i<questions.length; i++){

			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'green';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' / ' + questions.length;
		}

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
