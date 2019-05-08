import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { BaseComponent, BAText } from '../../components'

class HomePage extends BaseComponent {

  render () {
    const { isLogin } = this.props
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

        <BAText>homepage</BAText>

        <TouchableOpacity onPress={()=>{Actions.find()}} style={{marginTop:20}}>
          <BAText>跳转发现页</BAText>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{Actions.personalCenter()}} style={{marginTop:20}}>
          <BAText>跳转个人中心</BAText>
        </TouchableOpacity>

        {
          isLogin?
          <BAText style={{marginTop:40}}>已登录</BAText>
          :
          <TouchableOpacity onPress={()=>{
              this.props.dispatch({type:'Auth/changeLoginStatus',payload:true})
              }} style={{marginTop:40}}>
            <BAText>登录</BAText>
          </TouchableOpacity>
        }

      </View>
    )
  }
}
const mapStateToProps = ({ Auth }) => {
  const { isLogin } = Auth
  return { isLogin }
}

export default connect(mapStateToProps)(HomePage)
