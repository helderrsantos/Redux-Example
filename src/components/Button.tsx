import React from 'react';
import {TouchableOpacity, TouchableOpacityProps ,Text, StyleSheet} from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
}
export function Button({title, ...rest}: Props){
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});