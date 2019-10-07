import React from 'react';
import { Input } from 'react-native-ui-kitten';

export class InputWithCaptionShowcase extends React.Component {

  state = {
    value: '',
  };

  onChangeText = (value) => {
    this.setState({ value });
  };

  isValidValue = () => {
    return this.state.value.length >= 6;
  };

  render() {
    const isValidInputValue = this.isValidValue();
    return (
      <Input
        status={isValidInputValue ? 'success' : 'danger'}
        caption={isValidInputValue ? '' : 'Invalid password'}
        value={this.state.value}
        onChangeText={this.onChangeText}
      />
    );
  }
}