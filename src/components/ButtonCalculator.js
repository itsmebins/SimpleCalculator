import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonCalculator = ({ onPress, disabled, children }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>

  );
};

const styles = {
  buttonStyle: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#007aff',
    backgroundColor: '#E8EBF2',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold'

  }
};

export { ButtonCalculator };
