import React from 'react'
import StyledTextInput from './StyledTextInput'

export default class extends React.Component {

  state = {
    domainValue: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
  }

  handleDomainChange = (event) => {
    let domainValue = event.target.value
    domainValue = domainValue.replace(/ +/, '')
    this.setState({ domainValue })
    this.props.onChangeDomain(domainValue)
  }

  render() {

    return (
      <form onSubmit={this.handleFormSubmit}>
        <StyledTextInput
          onChange={this.handleDomainChange}
          value={this.state.domainValue}
          placeholder={this.props.defaultDomain}
        />
      </form>
    )
  }

}
