import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'

import { BaseComponent } from '../../components'

class PersonalCenter extends BaseComponent {

  render () {
    const { isLogin } = this.props
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>personal</Text>
        <Text style={{marginTop:20}}>{isLogin?'已登录':'未登录'}</Text>
      </View>
    )
  }

}

const mapStateToProps = ({ Auth }) => {
  const { isLogin } = Auth
  return { isLogin }
}

export default connect(mapStateToProps)(PersonalCenter)
