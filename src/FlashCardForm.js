import React from 'react';

class FlashCardForm extends React.Component {
  state = {
    card: [
      { question: '', answer: '' },
    ]
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.card);
    this.setState({ question: '', answer: '' })
  }
  
  handleChange = (e) => {
    this.setState({ question: e.target.value });
    this.setState({ answer: e.target.value });
  }

  render() {
    const { question, answer } = this.state.card;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={question}
          question="question"
          onChange={this.handleChange}
          required
          placeholder="Question" />
        <input 
          value={answer}
          answer="answer"
          onChange={this.handleChange}
          required
          placeholder="Answer" />
        <button>Add Flashcard</button>
      </form>
    )
  }
}

export default FlashCardForm;