import Taro, { useEffect } from '@tarojs/taro';
import { Text, View } from '@tarojs/components';
// import store from '../../store'
import NavBar from '../../components/navBar'
import './index.scss'

function Login() {
  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: '',
    })
    // store.dispatch(dispatch => {
    //   dispatch({
    //     type: 'LOGIN_STATE',
    //     payload: {
    //       phone: '18339635260'
    //     }
    //   })
    // })
  })
  const backHome = function() {
    Taro.reLaunch({
      url:'pages/index/index'
    })
  }
  return (
    <View>
      <NavBar 
        navClick={backHome}
        title=""
        icon="home"
      />
      {/* <NavBar
        isHome
        title='' 
        background='#346BF5' 
        color='#ffffff' 
        search
        headerRight={[
          {icon: {color: '#6afff9'}},
          {icon: '\ue63a'},
        ]}
      /> */}
      <Text>
        登录
      </Text>
    </View>
  )
}
export default Login
