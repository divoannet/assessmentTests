import { Component } from 'react'

import './style.css'

const FIELD_TYPES = ['number', 'text', 'textarea', 'checkbox', 'date', 'radio']

class OutputForm extends Component {
  getControls(buttons) {
    return buttons ? buttons.map((button, key) => ({
      label: button.label || `Action ${key + 1}`
    })) : [{
      label: 'Ok',
    }]
  }

  getItems = items => items.map((formItem, key) => ({
    label: formItem.label || `Field ${key + 1}`,
    type: FIELD_TYPES.includes(formItem.type) ? formItem.type : 'text'
  }))

  renderFormItem(formItem) {
    switch (formItem.type) {
      case 'number':
      case 'text':
      case 'checkbox':
      case 'date':
        return (
          <label>
            <span className='formLabel'>
              {formItem.label}
            </span>
            <input type={formItem.type} />
          </label>
        )
      case 'radio':
        return (
          <label>
            <span className='formLabel'>
              {formItem.label}
            </span>
            <input type={formItem.type} name={formItem.label} value={formItem.label} />
          </label>
        )
      case 'textarea':
        return (
          <label>
            <span className='formLabel'>
              {formItem.label}
            </span>
            <textarea></textarea>
          </label>
        )
    }
  }

  render() {
    if (!this.props.formData) {
      return null
    }

    const { formData: {
      buttons,
      title,
      items
    } } = this.props

    const formControls = this.getControls(buttons)
    const formItems = this.getItems(items)

    return (
      <form>
        {title && <h1>{title}</h1>}
        <div className='outputForm'>
          {formItems.map(formItem => (
            <div key={formItem.label} className='outputItem'>
              {this.renderFormItem(formItem)}
            </div>
          ))}
        </div>
        <div className='formControls'>
          {formControls.map(button => (
            <button key={button.label}>{button.label}</button>
          ))}
        </div>
      </form>
    )
  }
}

export default OutputForm
