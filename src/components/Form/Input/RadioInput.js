import PropTypes from "prop-types";
import React from "react";

export class RadioInput extends React.Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    radioHandler: PropTypes.func,
  };

  handleChange = (event) => {
    this.props.radioHandler(event);
  };

  render() {
    return (
      <input
        type="radio"
        name={this.props.name}
        value={this.props.value}
        checked={this.props.checked}
        onChange={this.handleChange}
      />
    );
  }
}
