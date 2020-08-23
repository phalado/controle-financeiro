import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/AccountCreate';

const VerifyAccounts = props => {
  const { navigation, accounts } = props;
  console.log(accounts)

  return (
    <View style={styles.container}>
      {Object.values(accounts).map(account => {
        console.log(account)
        return (
          <View>
            <Text>{account.name}</Text>
            <Text>{account.bank}</Text>
            <Text>{account.ag}</Text>
            <Text>{account.account}</Text>
            <Text>{account.value}</Text>
          </View>
        )
      })}
      <Button title='Adicionar Conta' onPress={() => navigation.push('Account Create')} />
    </View>
  )
}

export default VerifyAccounts;
