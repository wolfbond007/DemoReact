import React, { Component } from 'react';
import { Text } from 'react-native';

class BAText extends Component {

  constructor(props, context) {
    super(props, context);
  }


  render() {
    const props = this.props
    return (
      <Text {...props} allowFontScaling={props.allowFontScaling ? props.allowFontScaling : false}></Text>
    );
  }
}

const styles = {

}

export default BAText;
