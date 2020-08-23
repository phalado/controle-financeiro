import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/InitialScreen';

const InitialScreen = props => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
      <Button title='Verificar Contas' onPress={() => navigation.push('Verify Accounts')} />
      <Button title='Adicionar Conta' onPress={() => navigation.push('Account Create')} />
    </View>
  )
}

export default InitialScreen;
