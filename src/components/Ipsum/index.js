import { QUOTES }           from '../../lib/constants';
import React, { Component } from 'react';

export default class Ipsum extends Component {
  getParagraph = (key) => {
    const { sentences } = this.props;
    const text = Array(sentences).fill('').map(el => el = this.getQuote()).join('');

    return (
      <p key={ `p-${key}` }>
        { text }
      </p>
    );
  }

  getQuote = () => {
    const { character } = this.props;

    if (!character) return QUOTES[this.getRandomIndex(QUOTES.length)].text;

    const characterQuotes = QUOTES.filter(quote => quote.character === character);

    return characterQuotes[this.getRandomIndex(characterQuotes.length)].text;
  }

  getRandomIndex = (max) => {
    const min = 0;

    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    const { paragraphs } = this.props;
    const ipsum = Array(paragraphs).fill('').map((el, i) => el = this.getParagraph(i));

    return (
      <div>
        { ipsum }
      </div>
    );
  }
}
