import { Formik }           from 'formik';
import { object, mixed }    from 'yup';
import React, { Component } from 'react';

export default class Form extends Component {
  validate = () => object().shape({
    character  : mixed().oneOf([0, 1, 2, 3]),
    paragraphs : mixed().oneOf([1, 2, 3, 4, 5]),
    sentences  : mixed().oneOf([1, 2, 3, 4, 5]),
  })

  onSubmit = (values) => this.props.setIpsum(values)

  renderForm = (formikProps) => {
    const {
      // dirty,
      // errors,
      handleChange,
      handleSubmit,
      // isSubmitting,
      values: { character, paragraphs, sentences },
      setFieldValue
    } = formikProps;

    return (
      <form onSubmit={ handleSubmit }>
        <input
          checked={ character === 0 }
          name="character"
          onChange={ () => { setFieldValue('character', 0) } }
          type="radio" />
        <label>Any</label>

        <input
          checked={ character === 1 }
          name="character"
          onChange={ () => { setFieldValue('character', 1) } }
          type="radio" />
        <label>Dolores</label>

        <input
          checked={ character === 2 }
          name="character"
          onChange={ () => { setFieldValue('character', 2) } }
          type="radio" />
        <label>Ford</label>

        <input
          checked={ character === 3 }
          name="character"
          onChange={ () => { setFieldValue('character', 3) } }
          type="radio" />
        <label>Maeve</label>

        <br />

        <label>Paragraphs</label>
        <input
          name="paragraphs"
          onChange={ handleChange }
          type="number"
          value={ paragraphs } />
        <label>Sentences</label>

        <input
          name="sentences"
          onChange={ handleChange }
          type="number"
          value={ sentences } />

        <button type="submit">Submit</button>
      </form>
    );
  }

  render() {
    const { character, paragraphs, sentences } = this.props;

    return (
      <Formik
        initialValues={ { character, paragraphs, sentences } }
        onSubmit={ this.onSubmit }
        render={ this.renderForm }
        validateOnChange={ false }
        validationSchema={ this.validate() }
      />
    );
  }
}
