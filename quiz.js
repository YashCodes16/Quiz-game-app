// Bug: resolved  
// If we create an event listener multiple times ,it will be stacked and called the fuction again and again multiple times.
// This happens usually when we create an event linstener inside it and call that function multple time, the event listener will going to stack up on the element and perform the same task multiple times

const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];
  
let ques_ele = document.getElementById('question');
let option_ele = document.getElementById('options')
let score_ele = document.getElementById('score')
let next = document.getElementById('next')
let btn = document.getElementById('btn')

let score = 0
let currentQues =0

function allQues(){

  let {correctAnswer , options , question} = quesJSON[currentQues]
  ques_ele.textContent = question
  let shuffleedArr = shuffle(options)
  create_btn(shuffleedArr)


  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]]; 
      }
      return array
  }
  
  //creating buttons dynamicaly
  function create_btn(options){
    options.forEach(element => {
      let btn = document.createElement('button')
      btn.id = '#btn'
      btn.textContent = element
      btn.addEventListener('click',(event)=>{
        checkAnswer( event.target.textContent)
        score_ele.textContent =`Score: ${score}`

        if(currentQues < quesJSON.length - 1){
          currentQues++
          allQues()
        }else{
        ques_ele.textContent = 'Quiz Completed!!'
        option_ele.textContent = ''
        option_ele.id = ''
        }})

      option_ele.append(btn)
    });
  }
  function checkAnswer(value){
    if( correctAnswer == value){
      score++
    }else{
      score -= 0.25
    }
    option_ele.textContent = ''
    
  }



}

next.addEventListener('click',()=>{
  option_ele.textContent = ''


  if(currentQues < quesJSON.length -1){
    currentQues++
    allQues()
  }else{
  ques_ele.textContent = 'Quiz Completed!!'
  option_ele.textContent = ''
  option_ele.id = ''
  btn.innerHTML = ''
  }
  score_ele.textContent =`Score: ${score}`
})


allQues()
