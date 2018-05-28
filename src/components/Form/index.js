// https://github.com/jaredpalmer/formik#formik-
import React, { Component } from 'react';

export default class Form extends Component {

  renderForm() {
    const { updateSettings } = this.props;

    return (
      <form onSubmit={ updateSettings }>
        <input type="radio" name="character" value="1" />
        <label>Dolores</label>
        <input type="radio" name="character" value="2" />
        <label>Ford</label>
        <input type="radio" name="character" value="3" />
        <label>Maeve</label>

        <button type="submit">Submit</button>
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.renderForm() }
      </div>
    );
  }
}
