import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../../components/Button';
import { reset } from '../../redux/reducers/counter';

export function Details() {
  const count = useSelector(state => state.counter.total);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <Button onPress={()=> dispatch(reset())} title="Limpar valores" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#121015',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});