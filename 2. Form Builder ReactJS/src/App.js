import React, { Component } from 'react'

import { Tabs, Tab } from './components/tabs'
import { InputForm, OutputForm } from './components/formBuilder'

import './index.css'
import mock from './mock/formData.example.json'

class App extends Component {

  state = {
    formData: null,
  }

  onApplyButtonClick = (jsonValue) => {
      this.setState({
        formData: jsonValue,
      })
  }

  onInputFormError = () => {
    this.setState({
      formData: null,
    })
  }

  render() {
    const { formData } = this.state

    return (
      <div className="App">
        <Tabs activeTabIndex={formData ? 1 : 0}>
          <Tab title='Config'>
            <InputForm
              defaultValue={formData ? JSON.stringify(formData, null, 2) : ''}
              onApply={this.onApplyButtonClick}
              onError={this.onInputFormError}
            />
          </Tab>
          <Tab title='Result'>
            <OutputForm
              formData={formData}
            />
          </Tab>
          <Tab title='Example JSON'>
            <textarea
              className='exampleTextarea'
              defaultValue={JSON.stringify(mock, null, 2)}
            />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default App
