import quotes               from '../../lib/quotes';
import React, { Component } from 'react';

export default class Ipsum extends Component {

  getQuote = () => {
    const { character } = this.props;

    if (!character) return quotes[this.getRandomIndex(quotes.length)].text;

    const characterQuotes = quotes.filter(quote => quote.character === character);

    return characterQuotes[this.getRandomIndex(characterQuotes.length)].text;
  }

  getRandomIndex = (max) => {
    const min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  renderParagraph = () => {
    const { sentences } = this.props;
    const text = Array(sentences).fill('').map(el => el = this.getQuote());

    return (
      <p>
        { text.join('') }
      </p>
    );
  }

  render() {
    const { paragraphs } = this.props;
    const ipsum = Array(paragraphs).fill(null).map(el => el = this.renderParagraph());

    return (
      <div>
        { ipsum }
      </div>
    );
  }
}
