import React, { Component } from 'react';
import FlashCards from './FlashCards';
import './App.css';
import FlashCardForm from './FlashCardForm';

class App extends Component {
  state = {
    flashcards: [
      { id: 1, question: 'What sound does a cat make?', answer: 'meow', flipped: false},
      { id: 2, question: 'What sound does a dog make?', answer: 'woof', flipped: false},
      { id: 3, question: 'What sound does a cow make?', answer: 'moo', flipped: false},
    ],
    id: 4
  }

  addCard = (question, answer) => {
    const { flashcards, id } = this.state;
    const flashcard = { question, answer, flipped: false, id }
    this.setState({ 
      flashcards: [...flashcards, flashcard],
      id: id + 1,
     });
  }

  flip = (id) => {
    const { flashcards } = this.state;
    this.setState({
      flashcards: flashcards.map( flashcard => {
        if (flashcard.id === id ) {
          return {
            ...flashcard,
            flipped: !flashcard.flipped
          }
        }
        return flashcard
      })
    })
  }

  render() {
    const { flashcards } = this.state

    return (
      <div>
        <FlashCardForm addCard={this.addCard}/>
        <FlashCards cards={flashcards} flashcardClick={this.flip} />
      </div>
    );
  }
}

export default App;
