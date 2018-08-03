import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import PHTText from '../../components/PHTText'

class HomePage extends Component {

  render () {
    const { isLogin } = this.props
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

        <PHTText>homepage</PHTText>

        <TouchableOpacity onPress={()=>{Actions.find()}} style={{marginTop:20}}>
          <PHTText>跳转发现页</PHTText>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{Actions.personalCenter()}} style={{marginTop:20}}>
          <PHTText>跳转个人中心</PHTText>
        </TouchableOpacity>

        {
          isLogin?
          <PHTText style={{marginTop:40}}>已登录</PHTText>
          :
          <TouchableOpacity onPress={()=>{
              this.props.dispatch({type:'Auth/changeLoginStatus',payload:true})
              }} style={{marginTop:40}}>
            <PHTText>登录</PHTText>
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
