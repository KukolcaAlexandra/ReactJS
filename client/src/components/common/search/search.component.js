import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <input
        type="text"
        name="input"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
        onKeyDown={this.props.onClickHandler}
        value={this.props.value}
      />
    );
  }
}

export default Input;
