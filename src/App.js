import React, { Component } from 'react';
import Hangman from './Hangman';
import Missed from './Missed';
import Letters from './Letters';
import GameOver from './GameOver';
import '../css/style.css';

class App extends Component {

  state = {
    word: '',
    letters: {

    },
    missed: [],
    missedCount: 0
  }

  constructor(props) {
    super(props);
    this.getWord(); 
  }

  componentDidMount() {
    window.addEventListener('keypress', this.checkLetter);
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
    const { word, letters } = this.state;
    if (word.includes(key)) {
      const newLetters = letters.map(({ val, isFound }) => {
        (val === key) && (isFound = true);
        return {val: val, isFound: isFound}
      });
      this.setState({ letters: newLetters })
    } else {
      this.setState((prevState) => {
        return {missedCount: prevState.missedCount + 1};
      });
    }
  }

  render() {

    const { letters, missedCount } = this.state;

    return (
      <div className="game">
        <Hangman count={missedCount} />
        <Missed />
        <Letters letters={letters} />
        <GameOver />
      </div>
    );
  }
}

export default App;
