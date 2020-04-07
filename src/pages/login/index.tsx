import Taro, { useEffect, useState } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
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
  const inputedPhone = function(e: number) {
    setPhone(e.toString());
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
        <View className="form-box">
          <View className="phone-box input-item">
              <AtInput 
                name='userPhone'
                title='手机号'
                type='phone'
                maxLength={11}
                placeholder='请输入您的手机号码'
                value={phone}
                onChange={ inputedPhone}
              />
          </View>
          {phone}
        </View>
      </View>
    </View>
  )
}
export default Login
