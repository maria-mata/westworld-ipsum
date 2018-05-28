import quotes               from '../../lib/quotes';
import React, { Component } from 'react';

export default class Ipsum extends Component {
  getIndex = (max) => {
    const min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomQuote = () => {
    const { character } = this.props;

    if (!character) return quotes[this.getIndex(quotes.length)].text;

    const characterQuotes = quotes.filter(quote => quote.character === character);

    return characterQuotes[this.getIndex(characterQuotes.length)].text;
  }

  renderParagraph = () => {
    const { sentences } = this.props;
    const text = Array(sentences).fill('').map(el => el = this.getRandomQuote());

    return (
      <p>
        { text.join('') }
      </p>
    );
  }

  render() {
    const { paragraphs } = this.props;
    const array = Array(paragraphs).fill(null).map(el => el = this.renderParagraph());

    return (
      <div>
        { array }
      </div>
    );
  }
}
