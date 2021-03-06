import { ANY }              from '../../lib/constants';
import Form                 from '../Form';
import Ipsum                from '../Ipsum';
import React, { Component } from 'react';

export default class Container extends Component {
  constructor() {
    super();

    this.state = {
      character  : ANY,
      paragraphs : 3,
      sentences  : 3,
    }
  }

  setIpsum = values => this.setState(state => values);

  render() {
    const { character, paragraphs, sentences } = this.state;

    return (
      <div>
        <Form { ...{
          character,
          paragraphs,
          sentences,
          setIpsum : this.setIpsum
        } } />

        <Ipsum { ...{
          character,
          paragraphs,
          sentences
        } } />
      </div>
    );
  }
}
