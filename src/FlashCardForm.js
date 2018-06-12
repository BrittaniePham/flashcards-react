import React from 'react';

class FlashCardForm extends React.Component {
  state = { question: '', answer: '' }

  handleSubmit = (e) => {
    const { question, answer } = this.state
    e.preventDefault();
    this.props.addCard(question, answer);
    this.setState({ question: '', answer: '' })
  }

  // handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { question, answer } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={question}
          name="question"
          onChange={this.handleChange}
          required
          placeholder="Question" />
        <input 
          value={answer}
          name="answer"
          onChange={this.handleChange}
          required
          placeholder="Answer" />
        <button>Add Flashcard</button>
      </form>
    )
  }
}

export default FlashCardForm;