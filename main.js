let counter = 1;

const QUESTIONS = [
  'What is something your partner is worse at than they believe they are?',
  'If you told your partner something in confidence, who is the first person that they would repeat it to?',
  'What is something that you do because your partner enjoys it, but you would never do otherwise?',
  "Which of your partner's friends is the worst influence on them?",
  'When in public together, what is something your partner does that embarrasses you?',
  "What is something about your partner for which you find yourself apologizing to your friends or family?",
  'Think of a word, phrase, or expression that your partner misuses.',
  'Describe your most positive memorable sexual experience.',
  "Of your partner's previous relationships, which one makes you feel the least secure?",
  'In what ways does your partner fail to clean up after themself?',
  'Who are the top three people you sexually fantasize about the most often?',
  "If you could change any one thing about your partner's morals, what would it be?",
  "What aspects of your partner's family dynamic do you consider strange?",
  'How many of your coworkers would you describe as attractive?',
  'Which of your platonic friends do you find the most attractive?',
  "If a crystal ball could show you the truth about any events in your partner's life for which you were not present, what would they be?",
  "Is there something your partner has put off doing for a long time? Why haven't they done it yet?",
  'Make three "we" statements that you wish were true, but are not.',
  "Your partner's home catches fire. What do you hope would be destroyed? Why?",
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

function update() {
  setButtonVisibility();
  setCounterText();
  setQuestionText();
}

window.onload = function() {
  update();
}
