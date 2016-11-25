import React, { Component } from 'react';
import Hangman from './Hangman';
import Missed from './Missed';
import Message from './Message';
import Letters from './Letters';
import GameOver from './GameOver';
import '../css/style.css';

class App extends Component {

  state = {
    word: '',
    letters: {},
    missed: [],
    missedCount: 0,
    gameOver: false,
    gameWon: false
  }

  constructor(props) {
    super(props);
    this.getWord(); 
  }

  componentDidMount() {
    window.addEventListener('keypress', (event) => {
      (!this.state.gameOver) && this.checkLetter(event);
    });
  }

  getWord = () => {
    fetch('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=11&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
      .then(response => response.json()
      .then(word => {
        this.setState({ word: word.word })
      })
      .then(this.setLetters)
      .catch((err) => console.log('ERROR', err)));
  }

  setLetters = () => {
    const { word } = this.state;
    const letters = [...word].map((value) => {
      return {val: value, isFound: false}
    });
    this.setState({ letters: letters })
  }

  checkLetter = ({ key }) => {
    const { word, letters, missed } = this.state;
    if (word.includes(key)) {
      const newLetters = letters.map(({ val, isFound }) => {
                                (isFound === true) && this.errorMessage();
                                (val === key) && (isFound = true);
                                return {val: val, isFound: isFound}
      });
      this.setState({ letters: newLetters })
    } else if (missed.includes(key)) {
        this.errorMessage();
    } else {
      this.setState((prevState) => {
        return {missed: [...this.state.missed, key],
                missedCount: prevState.missedCount + 1};
      });
    }
    this.isItOver();
  }

  errorMessage = () => {
    const messageWrapper = document.querySelector('.message');
    messageWrapper.innerText = 'try another!';
    setTimeout(function(){
      messageWrapper.innerText = '';
    }, 700);
  }

  isItOver = () => {
    const { letters, missedCount, word } = this.state;
    const foundLetters = letters.filter(({ isFound }) => isFound);
    if (missedCount > 10) {
      this.setState({ gameOver: true });
    } else if (foundLetters.length === word.length) {
      this.setState({ 
        gameOver: true,
        gameWon: true
      });
    }
  }

  render() {

    const { letters, missedCount, missed, gameOver, gameWon } = this.state;

    return (
      <div className="game">
        <Hangman count={missedCount} />
        <Missed missed={missed} />
        <Message />
        <Letters letters={letters} />
        <GameOver isOver={gameOver} isWon={gameWon} />
      </div>
    );
  }
}

export default App;
