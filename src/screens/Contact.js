import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { enText } from '../lang/en'
import { Icon } from 'react-native-elements'

export default class Contact extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{enText.contact}</Text>
        <View style={styles.card}>
          <Text style={styles.text}>Sudhir Kumar Ojha</Text>
          <Text style={styles.text}>7876212256</Text>
          <Text style={styles.text}>sudhirkumarojhaa@gmail.com</Text>
          <Text style={styles.text}>Front End Developer, Rubico IT. Haridwar</Text>

        </View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            this.props.navigation.navigate('Settings')
          }}
        >
          <Icon name='close' color='#fff' />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#192338',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    position: 'relative'
  },
  title: {
    fontSize: 20,
    color: '#517fa4',
    textAlign: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    color: '#f7f7f7',
    paddingHorizontal: 20
  },

  close: {
    fontSize: 30,
    position: 'absolute',
    top: 40,
    right: 15
  }
})
