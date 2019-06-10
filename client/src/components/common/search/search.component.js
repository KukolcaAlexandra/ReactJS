// @flow

import React from 'react';

type Props = {
  placeholder: string,
  value: string,
  onChangeHandler: Function,
  onClickHandler: Function,
};

class Input extends React.Component<Props> {
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
