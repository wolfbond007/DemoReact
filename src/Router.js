import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { Router, Scene, Modal, Overlay, Tabs } from 'react-native-router-flux'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

import HomePage from './Pages/HomePage/HomePage'
import PersonalCenter from './Pages/PersonalCenter/PersonalCenter'
import Find from './Pages/Find'

class TabIcon extends React.PureComponent {
  render() {
    const { focused, title, font, selectFont } = this.props;
    return (
      <View style={styles.tabIcon}>
        <Text style={{fontSize:18, color: focused ? 'red' : 'gray'}}>{title.slice(0,1)}</Text>
        <Text style={[ styles.tabIconTitle, {color: focused ? 'red' : 'gray' } ]} >
          {title}
        </Text>
      </View>
    )
  }
}


class RouterComponent extends Component {

  render () {
    console.log('isLogin', this.props.isLogin);
    return (
      <Router >
        <Overlay key="overlay">
        <Modal key="modal"
          hideNavBar
          transitionConfig={() => ({
            screenInterpolator: (props) => {
              return CardStackStyleInterpolator.forHorizontal(props)
            }
          })} >

          <Tabs
            key="tabbar"
            swipeEnabled={false}
            showLabel={false}
            tabBarStyle={styles.tabBar}
          >
            <Scene key="homepage" component={HomePage} icon={TabIcon} title="HomePage" initial />
            <Scene hideNavBar key="personalCenter" component={PersonalCenter} icon={TabIcon} title="PersonalCenter" />
          </Tabs>

          <Scene hideNavBar key="find" component={Find} icon={TabIcon} title="Find" />
        </Modal>
        </Overlay>
      </Router>
    )
  }
}

let styles = StyleSheet.create({
  tabBar: {
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    backgroundColor: 'white',
    borderRadius: Platform.OS === 'ios' ? 1 : 0,
  },
  tabIcon: {
    flex: 1,
    width:200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tabIconIco: {
    width: 22,
    height: 22
  },
  tabIconTitle: {
    fontSize: 10
  },
})

const mapStateToProps = ({ Auth }) => {
  const { isLogin } = Auth
  return { isLogin }
}

export default connect(mapStateToProps)(RouterComponent)
