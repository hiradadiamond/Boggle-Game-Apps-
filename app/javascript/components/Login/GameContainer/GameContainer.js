import React, {Component} from 'react'
import WordList from './WordList.js'
import Footer from './Footer.js'
import Board from './Board.js'
import Timer from './Timer.js'
import StartButton from './StartButton.js'
import GameEndPopUp from './GameEndPopUp.js'


const BASE_URL = "http://localhost:3000/"


class GameContainer extends Component {

  state = {
    words: [],
    validwords:'',
    score: 0,
    timer: 60,
    letters: '                ',
    isGameStarted: false,
    gameHasEnded: false
  }

  fetchLetters = () => {
     var x= Math.floor(Math.random() * (7) + 1)
     return fetch(BASE_URL + "/api/v1/boggle/" + x )
     .then(res => res.json())

  }

 startGame=()=>{
     console.log('hira hello priya')
     this.fetchLetters()
     .then(json=>this.setState({
         letters: json.puzzle,
         isGameStarted: true,
         gameHasEnded:false,
         timer:60,
         words:[],
         validwords:json.validwords,
         scores:0
     },()=>{
       document.getElementById("poop").focus()
       this.createTimerInterval()
     }
   ))

   }
  endGame = () => {
    clearInterval(this.state.intervalId)
    this.setState({ isGameStarted: false, gameHasEnded: true })
  }

  submitScore = (event) => {
    const name = event.target.elements[0].value
    const data = {}
    data.score = this.state.score
    data.name = name
    this.postGameInfo(data)
  }


  createTimerInterval = () => {
     var intervalId = setInterval(this.timer, 1000);
     this.setState({intervalId: intervalId});
  }

  removeTimerInterval = () => {
    clearInterval(this.state.intervalId);
  }

  componentWillUnmount = () => {
     this.removeTimerInterval()
  }

  timer = () => {
    if (this.state.timer > 0) {
      this.setState({ timer: this.state.timer -1 });
    } else {
      this.endGame()
    }
  }

  handleWord = (word) => {
    if (!this.checkWordLength(word)) return false
    if (!this.checkDuplicateWord(word)) return false
    if (!this.checkWordExists(word)) return false
  }

  checkDuplicateWord = (word) => {
    return (this.state.words.includes(word) ? false : true)
  }

  checkWordLength = (word) => {
    return (word.length >= 3) ? true : false
  }

  checkWordExists = (word) => {
    if(this.state.validwords.includes(word)){
     this.addWord(word)
    }
  }

  addWord = (word) => {
    const newWordArray = [word, ...this.state.words]
    const newScore = this.scoreWords(newWordArray)
    this.setState({words: newWordArray, score: newScore})
  }

  scoreWords  = (wordArray) => {
    return wordArray.reduce((score, currentWord) => {
      return score += (currentWord.length)
    }, 0)
  }

  render() {
    return(
      <div>
        <div className="game-container-grid">
           {this.state.isGameStarted ? <Timer timer={this.state.timer} /> : null}
          <Board letters={this.state.letters} />
          <WordList words={this.state.words} />
          <Footer handleWord={this.handleWord} letters={this.state.letters} words={this.state.words} score={this.state.score} isGameStarted={this.state.isGameStarted}/>
          {this.state.isGameStarted ? null : <StartButton startGame={this.startGame}/>}
          {this.state.gameHasEnded ? <GameEndPopUp score={this.state.score} submitScore={this.submitScore}/> : null}
        </div>
      </div>
    )
  }
}

export default GameContainer
