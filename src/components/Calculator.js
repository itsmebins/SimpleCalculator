import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ButtonCalculator } from './ButtonCalculator.js';

  class calculator extends Component {
    state = { expressionStr: '' };

    onPressButton(value) {
      const previousValue = this.state.expressionStr;
      //const this.props.
      let currrentExpression = previousValue.toString() + value.toString();
      if (value === 'E') {
        currrentExpression = eval(previousValue);
      } else if (value === 'C') {
        currrentExpression = '';
      } else if (value === 'R') {
        const currentValue = previousValue.toString();
        currrentExpression = currentValue.substring(0, ((currentValue.length - 1)));
      }
      this.setState({ expressionStr: currrentExpression });
    }


    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={styles.resultSection}>
            <Text style={styles.textStyle}> { this.state.expressionStr } </Text>
          </View>
          <View style={{ flex: 8, backgroundColor: '#1B273D', flexDirection: 'column' }}>
            <View style={styles.rowContainer}>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 7)}> 7 </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 8)}> 8 </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 9)}> 9 </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, '/')}> / </ButtonCalculator>
            </View>
            <View style={styles.rowContainer}>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 4)}> 4 </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 5)}> 5 </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 6)}> 6 </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, '*')}> * </ButtonCalculator>
            </View>
            <View style={styles.rowContainer}>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 1)}> 1 </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 2)}> 2 </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 3)}> 3 </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, '+')}> + </ButtonCalculator>
            </View>
            <View style={styles.rowContainer}>
              <ButtonCalculator onPress={this.onPressButton.bind(this, '.')}> . </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 0)}> 0 </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 'R')}> DEL </ButtonCalculator>
              <ButtonCalculator onPress={this.onPressButton.bind(this, 'E')}> = </ButtonCalculator>
              </View>
              <View style={styles.rowContainer}>
                <ButtonCalculator onPress={this.onPressButton.bind(this, '-')}> - </ButtonCalculator>
                <ButtonCalculator onPress={this.onPressButton.bind(this, 'C')}> C </ButtonCalculator>
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
      },
      textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 28,
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: '600'

      },
      resultSection: {
        flex: 2,
        backgroundColor: '#E8EBF2',
        justifyContent: 'center',
        alignItems: 'center'
      }
    };


    export default calculator;
