import React from 'react';

const FlashCard = ({ id, question, answer, flipped, flashcardClick }) => (
  <li onClick={ () => flashcardClick(id) }>
    {question}
    {answer}
  </li>
)

export default FlashCard;