import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { enText } from '../lang/en'
import { Icon } from 'react-native-elements'

export default class PaymentOptions extends React.Component {
  render () {
    const { navigation } = this.props
    const option = navigation.getParam('option')
    const value = navigation.getParam('value')

    const warning = (
      <View>
        <Icon name='warning' size={80} color='tomato' />
        <Text style={styles.text}>
          {enText.choice} {option} {enText.paymentOptions}
        </Text>
        <Text style={styles.text}>{enText.PaymentOptions}</Text>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            this.props.navigation.navigate('Store')
          }}
        />
        <Button
          title={enText.goBack}
          type='ionicon'
          onPress={() => this.props.navigation.navigate('Store')}
          containerViewStyle={{ width: '100%' }}
        />
      </View>
    )

    const success = (
      <View>
        <Icon name='done' size={80} color='#0c9' />
        <Text style={styles.text}>{enText.success}</Text>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            this.props.navigation.navigate('Store')
          }}
        />
        <Button
          title={enText.goBack}
          type='ionicon'
          onPress={() => this.props.navigation.navigate('Store')}
          containerViewStyle={{ width: '100%' }}
        />
      </View>
    )

    let show

    if (value === 3) {
      show = success
    } else {
      show = warning
    }

    return <View style={styles.container}>{show}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#192338',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 40,
    textAlign: 'center'
  },
  close: {
    fontSize: 30,
    position: 'absolute',
    top: 40,
    right: 15
  }
})
