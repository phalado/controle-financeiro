import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from '../styles/AccountCreate';

const AccountCreate = props => {
  const { navigation, addAccount } = props;
  const [accData, setAccData] = useState({ name: '', bank: '', ag: '', account: '', value: 0 })
  console.log(accData)

  const setData = (type, data) => {
    console.log(accData);
    setAccData({
      ...accData,
      [type]: data
    })
  }

  const saveData = () => {
    addAccount(accData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova conta</Text>
      <Text style={styles.text}>Nome da conta:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setData('name', text)}
        disableFullscreenUI={true}
        keyboardType='default'
      />
      <Text style={styles.text}>Banco:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setData('bank', text)}
        disableFullscreenUI={true}
        keyboardType='default'
      />
      <Text style={styles.text}>Agência:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setData('ag', text)}
        disableFullscreenUI={true}
        keyboardType='number-pad'
      />
      <Text style={styles.text}>Conta:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setData('account', text)}
        disableFullscreenUI={true}
        keyboardType='number-pad'
      />
      <Text style={styles.text}>Valor inicial na conta:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setData('value', text)}
        disableFullscreenUI={true}
        keyboardType='number-pad'
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Salvar'
          onPress={() => {
            saveData();
            navigation.goBack(null)
          }}
        />
        <Button title='Cancelar' onPress={() => navigation.goBack(null)} />
      </View>
    </View>
  )
}

export default AccountCreate;
