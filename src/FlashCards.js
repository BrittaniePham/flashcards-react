import React from 'react';
import FlashCard from './FlashCard'

const FlashCards = ({ cards, flashcardClick }) => (
  <div>
    <h2 className="App">React Flash Cards</h2>
    <ul>
      { cards.map( card => <FlashCard key={card.id} {...card} flashcardClick={flashcardClick} /> )}
    </ul>
  </div>
)

export default FlashCards;