import { ANY, DOLORES, FORD, MAEVE } from '../../lib/quotes';
import { Formik }                    from 'formik';
import { object, mixed }             from 'yup';
import React, { Component }          from 'react';

const radioValues = [ANY, DOLORES, FORD, MAEVE];

export default class Form extends Component {
  validate = () => object().shape({
    character  : mixed().oneOf(radioValues),
    paragraphs : mixed().oneOf([1, 2, 3, 4, 5]),
    sentences  : mixed().oneOf([1, 2, 3, 4, 5]),
  })

  onSubmit = (values) => this.props.setIpsum(values)

  getRadio = ({ character }, setFieldValue, name, i) => {
    return (
      <div key={ `radio-${i}`}>
        <input
          checked={ character === radioValues[i] }
          name="character"
          onChange={ () => { setFieldValue('character', radioValues[i]) } }
          type="radio" />
          <label>{ name }</label>
      </div>
    );
  }

  getInput = (values, name, handleChange, i) => {
    return (
      <div key={ `input-${i}`}>
        <label>{ name.charAt(0).toUpperCase() + name.slice(1) }</label>
        <input
          name={ name }
          onChange={ handleChange }
          type="number"
          value={ values[name] } />
      </div>
    );
  }

  renderForm = (formikProps) => {
    const {
      // dirty,
      // errors,
      handleChange,
      handleSubmit,
      // isSubmitting,
      values,
      setFieldValue
    } = formikProps;

    const radioLabels = ['Any', 'Dolores', 'Ford', 'Maeve'];
    const inputLabels = Object.keys(values).filter(name => name !== 'character');

    return (
      <form onSubmit={ handleSubmit }>
        { radioLabels.map((name, i) =>
          this.getRadio(values, setFieldValue, name, i)) }

        { inputLabels.map((name, i) =>
          this.getInput(values, name, handleChange, i)) }

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
        validationSchema={ this.validate() } />
    );
  }
}
