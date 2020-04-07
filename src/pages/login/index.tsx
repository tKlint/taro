import Taro, { useEffect, useState } from '@tarojs/taro';
import { Text, View, Image } from '@tarojs/components';
import { AtInput }  from 'taro-ui'
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
  const [phone, setPhone] = useState<string|never>('');
  const backHome = function() {
    Taro.switchTab({
      url: '../index/index'
    })
  }
  const inputedPhone = function(e) {
    setPhone(e);
    console.log(e);
  }
  return (
    <View>
      <NavBar 
        navClick={backHome}
        title=""
        icon="home"
      />
      <View className="content-box">
        <View className="logo-box">
          <Image src="../../static/icon/logo.png" />
        </View>
        <View>
          <View>
            <AtInput 
              name='userPhone'
              title='?????'
              type='number'
              maxLength={11}
              placeholder='??????'
              value={phone}
              onChange={e=>{ inputedPhone(e)}}
            />
          </View>
          {phone}
        </View>
      </View>
    </View>
  )
}
export default Login
