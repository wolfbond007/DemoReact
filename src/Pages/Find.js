import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Find extends Component {

  render () {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Find</Text>
        <TouchableOpacity onPress={()=>{Actions.pop()}} style={{marginTop:20}}>
          <Text>返回</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Find
