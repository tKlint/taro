import Taro, { useEffect, useState, login } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { AtInput, AtButton, AtMessage }  from 'taro-ui'
import store from '../../store'
import NavBar from '../../components/navBar'
import './index.scss'

import checked from '../../static/icon/select.png';
import unCheck from '../../static/icon/unSelect.png';


function Login() {
  const host: String = 'https://prebin.zhushang.net/zb/public/index.php/api/';
 
  //  用户手机号
  const [phone, setPhone] = useState<string|never>('');
  //  随机生成的4位字符类型的验证码 用户匹配用户输入的验证码
  const [randomCode, setRandomCode] =useState<string|never>('');
  //  用户输入的验证码
  const [inputCode, setInputCode] =useState<string|never>('');
  //  下次获取验证时间 单位秒
  const [nextTime, setNextTime] = useState<number>(10);
  //  是否同意协议
  const [agreement, setAgreement] = useState<boolean>(false);

  //  点击导航左边icon返回首页
  const backHome = function() {
    Taro.switchTab({
      url: '../index/index'
    })
  }

  //  用户输入手机号
  const inputedPhone = function(e: number) {
    setPhone(e.toString());
  }

  //  用户输入验证码
  const inputRandomCode = function(e: number) {
    setInputCode(e.toString());
  }

  /**
   * @Author: gzk
   * @description: 发送短信验证码
   * @param : tel
   * @return: data
   */
  const sendMsgToUser = function(tel: Number|String, code: Number|String) {
    return Taro.request({
      url: host + 'sendExpiredWarning',
      data: {
        tpl_id : 140513,
        phone_list : tel,
        code
      }
    });
  }

  /**
   * @Author: gzk
   * @description: 点击生成4位随机验证码
   * @param : null
   * @return: null
   */
  const createRandomCode = async function() {
    let regPhone = /^1[3456789]\d{9}$/.test(phone);
    if(regPhone) {
      //  设置倒计时
      setNextTime(60);
      //  生成0~9999之间的随机整数 并转化为字符类型
      let random = (Math.floor(Math.random() * 9999)).toString();
      //  随机串的长度是否等于4
      const lackLength = random.length - 4;
      //  不足4位前方补'0', 缺多少位补多少
      for(let i = 0; i < lackLength; i++) {
        random = '0' + random;
      }
      //  将4位长度的随机串赋给randomCode
      setRandomCode(random);
      //  发送短信验证码
      let resData = await sendMsgToUser(phone, random);
      console.log(resData);
      //  倒计时每秒递减1 并赋值给nextTime
      let timer = setInterval(()=>{
        setNextTime(nextTime => {
          //最后一秒不在进行倒计时，清除该interval
          nextTime === 1 && clearInterval(timer);
          return nextTime - 1;
        });
      }, 1000);
    }else {
      setPhone('');
      Taro.atMessage({
        'message': '手机格式错误',
        'type': 'error',
      })
    }
  }

  // 获取验证码/n秒后再次获取
  const randomBtn = randomCode && nextTime > 0 ? 
    <AtButton className="next-btn">{nextTime}秒后重新获取</AtButton> : 
    <AtButton className="create-btn" onClick={createRandomCode}>获取验证码</AtButton>;
  
  const toLogin = async function() {
    let loginResultToMessage;
    loginResultToMessage = !phone && '请输入手机号';
    loginResultToMessage = randomCode !== inputCode && '验证码不正确';
    loginResultToMessage = !agreement && '先同意协议';
    if (!loginResultToMessage) {
      let resData = await Taro.request({
        url: host + 'loginOrRegisterAction',
        data: {
          tel: phone
        }
      });
      if (resData.data.code === 200) {
        store.dispatch(dispatch => {
          dispatch({
            type: 'LOGIN_STATE',
            payload: {
              phone
            }
          })
        })
        Taro.atMessage({
          'message': '登录成功',
          'type': 'success'
        })
      }
    }
  }
  return (
    <View>
      <NavBar 
        navClick={backHome}
        title=""
        icon="home"
      />
      <AtMessage />
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
                onChange={inputedPhone}
              />
          </View>
          <View className="code-box input-item">
              <AtInput 
                name='randomCode'
                title='验证码'
                type='number'
                maxLength={4}
                placeholder='请输入您的验证码'
                value={inputCode}
                onChange={inputRandomCode}
              > 
                {randomBtn}
              </AtInput>
          </View>
          <View className="agrement-box">
            <View className="like-radio" onClick={()=>{setAgreement(!agreement)}}>
              <Image src={agreement ? checked : unCheck}  />
            </View>
            <View className="pdf-box">
              <Text>我已阅读并同意</Text>
              <Text className="pdf-link">《筑商平台用户协议》</Text>
              <Text className="pdf-link">《筑商平台隐私政策》</Text>
            </View>
          </View>
          <AtButton className="login-btn" onClick={()=>{toLogin}}>登录</AtButton>
        </View>
      </View>
    </View>
  )
}
export default Login
