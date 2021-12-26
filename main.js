let counter = 1;

const QUESTIONS = [
  'What is something that you do because your partner enjoys it, but you would never do otherwise?',
  'If you told your partner something in confidence, who is the first person to whom they would repeat it?',
  'When in public together, what is something your partner does that embarrasses you?',
  "Which of your partner's friends is the worst influence on them?",
  'Think of a word, phrase, or expression that your partner misuses.',
  'Describe your most positive memorable sexual experience.',
  'What is something your partner is worse at than they believe they are?',
  'How many of your coworkers would you describe as attractive?',
  "Of your partner's previous relationships, which one makes you feel the least secure?",
  "If a crystal ball could show you the truth about any events in your partner's life for which you were not present, what would they be?",
  'In what ways does your partner fail to clean up after themself?',
  'Who are the top three people about whom you sexually fantasize the most often?',
  "If you could change any one thing about your partner's morals, what would it be?",
  "What aspects of your partner's family dynamic do you consider strange?",
  'Which of your platonic friends do you find the most attractive?',
  "Is there something your partner has put off doing for a long time? Why haven't they done it yet?",
  'Make three "we" statements that you wish were true, but are not.',
  "What is something about your partner for which you find yourself apologizing to your friends or family?",
  "Your partner's home catches fire. What do you hope would be destroyed? Why?",
  'If you could become your partner for one day, what is one problem that they have which you would fix? How would you solve it?',
  'What is something that your partner used to do which made you fall for them, but which they have not done in a long time?',
  'What is a project or task on which you and your partner worked together, but which you could have completed faster by yourself?',
  'Which of your own friends do you think would be the best significant other for your partner?',
  'If you could change anything about the way your partner was raised, what would it be?',
  'Describe a day that your partner would enjoy, but throughought which you would be displeased.',
  'What is an item of clothing that your partner should get rid of?',
  "Which of your partner's beliefs is the most obviously incorrect?",
  "Think of a goal of your partner's which they have yet to achieve. How could they achieve it faster?",
  'List the small inconveniences your partner causes you.',
  'About what does you partner worry too much? too little?',
  'On what does your partner spend too much money?',
  'What is a double standard in your relationship?',
  'What accomplishments is your partner more proud of than they should be?',
  'In what ways are you the better partner in your relationship?',
  'What does your partner find humorous that you do not?',
  'On which questions do you believe your partner lied in their answers?',
];
  

function goToNextQuestion() {
  ++counter;
  update();
}

function goToPreviousQuestion() {
  --counter;
  update();
}

function hideElementWithId(id) {
  document.getElementById(id).style.display = 'none';
}

function showElementWithId(id) {
  document.getElementById(id).style.display = '';
}

function setButtonVisibility() {
  if (counter == 1) {
    hideElementWithId('previous');
  } else if (counter == 2) {
    showElementWithId('previous');
  }
  if (counter == QUESTIONS.length) {
    hideElementWithId('next');
  } else if (counter == QUESTIONS.length -1) {
    showElementWithId('next');
  }
}

function setCounterText() {
  document.getElementById('counter').innerText = counter;
}


function setQuestionText() {
  document.getElementById('question').innerText = QUESTIONS[counter-1];
}

function updateQuestionText() {
  document.getElementById('question').style.animation = 'fadeout .2s linear';
}

function updateQuestionIndexQueryParameter() {
  const queryParameters = new URLSearchParams();
  queryParameters.set('q', counter);
  const path = `${window.location.pathname}?${queryParameters}`;
  history.pushState(null, '', path);
}

function update() {
  setButtonVisibility();
  setCounterText();
  updateQuestionText();
  updateQuestionIndexQueryParameter();
}

function isValidQuestionIndex(n) {
  return !isNaN(n) && n >= 1 && n <= QUESTIONS.length;
}

function getQuestionIndexQueryParam() {
  const queryParameters = new URLSearchParams(window.location.search);
  const questionParam = queryParameters.get('q');
  if (questionParam == null) {
    return 1;
  }
  const parsed = parseInt(questionParam);
  return isValidQuestionIndex(parsed) ? parsed : 1;
}

window.onload = function() {
  counter = getQuestionIndexQueryParam();
  const question = document.getElementById('question');
  question.addEventListener('animationend',
    function() {
      setQuestionText();
      question.style.animation = 'fadein .2s linear';
    });
  update();
}
