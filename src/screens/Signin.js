import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native'
import ChangeLanguage from './ChangeLanguage'

export default class Signin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      dataSource: [],
      selected_category: null,
      toggle: false
    }
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = () => {
    this.setState({
      loading: true
    })

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => {
        this.setState({
          loading: false
        })
      })
  }

  renderItem = data => {
    return (
      <TouchableOpacity
        onPress={() => this._handleCategorySelect(data)}
        style={
          this.state.selected_category === data.item.id
            ? styles.selected
            : styles.list
        }
      >
        <Text style={styles.text}>{data.item.title}</Text>
      </TouchableOpacity>
    )
  }

  _handleCategorySelect = data => {
    this.setState({
      selected_category: data.item.id
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={data => this.renderItem(data)}
          keyExtractor={item => item.id.toString()}
          extraData={this.state.selected_category}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: '#0c9'
  },
  list: {
    marginVertical: 4,
    fontSize: 18,
    padding: 10,
    backgroundColor: '#999'
  },
  text: {
    marginVertical: 4,
    fontSize: 18,
    padding: 10
  }
})
