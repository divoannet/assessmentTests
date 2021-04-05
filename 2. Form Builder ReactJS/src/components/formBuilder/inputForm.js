import { Component } from "react";

import './style.css'

class InputForm extends Component {

  state = {
    inputValue: null,
    error: null,
  }

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onApplyButtonClick = () => {
    const { onApply, onError } = this.props
    const { inputValue } = this.state

    try {
      const jsonValue = JSON.parse(inputValue)

      if (!jsonValue.items || !Array.isArray(jsonValue.items)) {
        throw new Error('Invalid JSON format')
      }

      onApply(jsonValue)
      this.setError()
    } catch (error) {
      if (error instanceof SyntaxError) {
        this.setError('Invalid JSON')
      } else {
        this.setError(error.message)
      }
      onError(error)
    }
  }

  setError = (errorText) => {
    this.setState({
      error: errorText ? errorText : null,
    })
  }

  render() {
    const { defaultValue } = this.props
    const { inputValue, error } = this.state
    return (
      <>
        <textarea
          placeholder='JSON'
          onChange={this.inputChange}
          value={inputValue}
          defaultValue={defaultValue}
          className='inputForm'
        />
        {error && (
          <div className='warning'>{error}</div>
        )}
        <div className='formControls'>
          <input type='button' value='Apply' onClick={this.onApplyButtonClick} />
        </div>
      </>
    )
  }
}

export default InputForm
