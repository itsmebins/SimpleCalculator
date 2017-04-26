import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { ButtonCalculator } from './ButtonCalculator.js';

class calculator extends Component {

  onPressButton() {
    console.log('here');
  }

  render() {
    return (
      <View style={ {flex: 1} }>
            <View style={{ flex: 2, backgroundColor: 'white'} }>
              <Text> Result= </Text>
              <Text> {this.props.expressionStr } </Text>
            </View>
            <View style={{flex: 8, backgroundColor: '#3E606F', flexDirection: 'column'}}>
              <View style={styles.rowContainer}>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> 7 </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> 8 </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> 9 </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> / </ButtonCalculator>
              </View>
              <View style={styles.rowContainer}>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> 4 </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> 5 </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> 6 </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> * </ButtonCalculator>
              </View>
              <View style={styles.rowContainer}>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> 1 </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> 2 </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> 3 </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> + </ButtonCalculator>
              </View>
              <View style={styles.rowContainer}>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> . </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> 0 </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> [-- </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this)}> '=' </ButtonCalculator>
              </View>
            </View>
      </View>
    );
  }
}

const styles = {
  mainSection: {
    flex: 1
  },
  keyPadSection: {
    flex: 8,
    backgroundColor: '#9ACD32',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 4,
    borderColor: '#ff00',
    borderWidth: 2
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-around'
  }
};

const mapStateToProps = (state) => {
  return state.expressionStr;
};

export default connect(mapStateToProps, {})(calculator);
