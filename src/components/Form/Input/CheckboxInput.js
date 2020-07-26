import PropTypes from "prop-types"
import React from "react"

export class CheckboxInput extends React.Component {
  static propTypes = {
    checkboxHandler: PropTypes.func,
    checked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }

  handleChange = (event) => {
    this.props.checkboxHandler(event)
  }

  render() {
    return <input type="checkbox" name={this.props.name} checked={this.props.checked} onChange={this.handleChange} />
  }
}
