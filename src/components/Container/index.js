import Form                 from '../Form';
import Ipsum                from '../Ipsum';
import React, { Component } from 'react';

export default class Container extends Component {
  constructor() {
    super();

    this.settings = {
      character  : 1,
      paragraphs : 5,
      sentences  : 4,
    }
  }

  updateSettings = settings => this.settings = settings;

  render() {
    const { character, paragraphs, sentences } = this.settings;

    return (
      <div>
        <Form { ...{
          updateSettings: this.updateSettings
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
