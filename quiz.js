class Quiz{
    constructor(questions) {
      this.questions = questions;
    }

    buildQuiz() {
      const container = document.querySelector('#buildQuiz');
      const output = [];
      
      let qNum = 1;
      this.questions.map( question => {
        
        let p = `<h4>${question.question}</h4>`;
      
        p += '<ul>';
        
        let aNum = 1;
        for(let choice in question.choices) {
          p += `<li><label for="a${aNum}"><span>${choice}</span> ${question.choices[choice]} <input type="radio" value="${choice}" name="question${qNum}"  id="a${aNum}" /></label></li>`;
          aNum++;
        }
        p += '</ul>'; 
        
        output.push(p)
      
        qNum++;
        container.innerHTML = output.join('');
        });


      }

      scoreQuiz() {

        let choices = document.querySelectorAll('input[type="radio"]:checked');
        
  
        choices.forEach( choice => {
            choice.disabled = true;
            choice.parentNode.classList.add('checked');
          }
        );
  
        let userAnswers = [];
        let numCorrect = 0;
      
        for(let i = 0; i < choices.length; i++) {
            if(choices[i].checked) {
              userAnswers.push(choices[i].value)
          }
        }
  
        //console.log(this.questions);
        choices.forEach( (choice, i) => {
          if(choice.value === this.questions[i].correct) {
            choice.parentNode.classList.add('correct');
            numCorrect++;  
          }
        });
  
      
    document.querySelector('#results').innerHTML = `${numCorrect} out of ${questions.length}`
  }
}
  
    
let questions = [
  {
     question: 'What year did Lisa graduate from college?',
   choices: {
        a: '1963',
        b: '2005',
        c: '1984',
        d: '2013'
   }, correct: 'c'
 },
     {
     question: 'How many times did Lisa move before she was 19?',
   choices: {
        a: 'Less than two',
        b: 'Over five',
        c: 'Not at all',
        d: 'More than 15'
   }, 
        correct: 'd'
 },
     {
     question: 'In which branch of military service did Lisa serve?',
   choices: {
        a: 'USMC',
        b: 'USAF',
        c: 'Coast Guard',
        d: 'Army'
   },   correct: 'b'
 },
     {
     question: 'Which profession does NOT belong?',
   choices: {
        a: 'Networking Engineer',
        b: 'Sales Technical Instructor',
        c: 'Targets Intelligence',
        d: 'Toy Store Manager',
        e: 'Technical Writer'
   },   correct: 'a'
 },
     {
     question: 'Which country has Lisa NOT lived in?',
   choices: {
        a: 'Germany',
        b: 'Canada',
        c: 'Iran',
        d: 'Iraq',
        e: 'South Korea'
   },   correct: 'd'
 },
     {
     question: 'How many children does Lisa have?',
   choices: {
        a: 'None',
        b: 'Two boys and a girl',
        c: 'Four girls',
        d: 'Four boys',
        e: 'One girl'
   },   correct: 'c'
 },
     {
     question: 'What are the ages of her children?',
   choices: {
        a: '12, 13, 20, 29',
        b: 'No kids',
        c: '27, 28, 29',
        d: '12',
        e: '5, 9, 15, 30'
   },   correct: 'a'
 },
     {
     question: 'Which of the following is NOT true?',
   choices: {
        a: 'Lisa has driven a Soviet tank',
        b: 'Lisa has flown in a helicopter',
        c: 'Lisa has visited Pompeii',
        d: 'Lisa has won the lottery',
        e: 'Lisa has visited Panama'
   },   correct: 'e'
 },
      {
     question: 'How many cats does Lisa have?',
   choices: {
        a: 'None, she hates cats',
        b: 'One spoiled cat',
        c: 'Two spoiled cats',
        d: 'Six spoiled cats',
        e: 'Twelve ignored cats'
   },   correct: 'd'
 },
      {
     question: 'How much fun did Lisa have with this quiz?',
   choices: {
        a: 'None',
        b: 'Too much',
        c: 'Not enough',
        d: 'Just enough',
   },   correct: 'b'
 },
 ]

let jsQuiz = new Quiz(questions);

jsQuiz.buildQuiz()
 
document.getElementById('submit').addEventListener('click', function() {
  jsQuiz.scoreQuiz();
})
  
