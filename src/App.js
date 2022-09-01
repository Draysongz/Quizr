import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {


const Question = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which internet company began life as an online bookstore called Cadabra?",
    correct_answer: "Amazon",
    incorrect_answers: [
      "eBay",
      "Overstock",
      "Shopify"
    ],
    index: 1
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does AD stand for in relation to Windows Operating Systems? ",
    correct_answer: "Active Directory",
    incorrect_answers: [
      "Alternative Drive",
      "Automated Database",
      "Active Department"
    ],
    index: 2
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What did the name of the Tor Anonymity Network orignially stand for?",
    correct_answer: "The Onion Router",
    incorrect_answers: [
      "The Only Router",
      "The Orange Router",
      "The Ominous Router"
    ],
    index: 3
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On which day did the World Wide Web go online?",
    correct_answer: "December 20, 1990",
    incorrect_answers: [
      "December 17, 1996",
      "November 12, 1990",
      "November 24, 1995"
    ]
  ,
  index: 4
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of the default theme that is installed with Windows XP?",
    correct_answer: "Luna",
    incorrect_answers: [
      "Neptune",
      "Whistler",
      "Bliss"
    ],
    index: 5
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In programming, the ternary operator is mostly defined with what symbol(s)?",
    correct_answer: "?:",
    incorrect_answers: [
      "??",
      "if then",
      "?"
    ],
    index: 6
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these programming languages is a low-level language?",
    correct_answer: "Assembly",
    incorrect_answers: [
      "Python",
      "C#",
      "Pascal"
    ],
    index: 7
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the term GPU stand for?",
    correct_answer: "Graphics Processing Unit",
    incorrect_answers: [
      "Gaming Processor Unit",
      "Graphite Producing Unit",
      "Graphical Proprietary Unit"
    ],
    index: 8
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "How many bytes are in a single Kibibyte?",
    correct_answer: "1024",
    incorrect_answers: [
      "2400",
      "1000",
      "1240"
    ],
    index: 9
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the &#039;S&#039; in the RSA encryption algorithm stand for?",
    correct_answer: "Shamir",
    incorrect_answers: [
      "Secure",
      "Schottky",
      "Stable"
    ],
    index: 10
  }
]
const [currentQuestion, setCurrentQuestion] = useState(0);
const[showScore, setShowScore]=useState(false)
const [score, setScore] = useState(0);
const handleAnswerButtonClick = (correct_answer) => {
  if (correct_answer) {
		setScore(score + 1)
	}
	const nextQuestion = currentQuestion + 1;
	setCurrentQuestion(nextQuestion);
  if (nextQuestion < Question.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowScore(true);
  }
};

  return (
    <>
    <h1 className='header'>QUIZR</h1>
		<div className='app'>
			
			{showScore ? (
				<div className='score-section'>You scored {score} out of {Question.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {Question[currentQuestion].index}</span>/{Question.length}
						</div>
						<div className='question-text'>{Question[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
					{Question[currentQuestion].incorrect_answers.map((e, index)=>{
            return <button  onClick={() => handleAnswerButtonClick()} key={index} type='button'>{e}</button>
          })}
          <button  onClick={() => handleAnswerButtonClick(Question[currentQuestion].correct_answer)}>{Question[currentQuestion].correct_answer}</button>
					</div>
				</>
			)}
		</div>
    </>
	);
}

export default App;
