import React from 'react';

const style = { cursor: 'pointer', color: 'blue' }

const FlashCard = ({ id, question, answer, flipped, flashcardClick }) => (
  <li style={style} onClick={() => flashcardClick(id)}>
    { flipped ? answer : question }
  </li>
)

export default FlashCard;