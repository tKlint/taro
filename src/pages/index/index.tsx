import Taro, { useEffect, useState } from '@tarojs/taro';
import { View, Text, Button, Form, Image } from '@tarojs/components';
import BannerSwiper from '../../components/swiper';
import TestTool from '../../components/tips'
// import {connect} from '@tarojs/redux'
// import NavBar from 'taro-navbar';
import './index.scss'
import store from '../../store'

interface NavItemFace {
  title: string;
  src: string;
  icon: string;
}

function Index () {
  //存储用户登录状态/手机号
  let [phone, setPhone] = useState<string|number[]>('');
  let [navItem, setNavItem] = useState<NavItemFace[]>([
    {
      title: '任务大厅',
      src:  'xx',
      icon:  require('../../static/icon/task_hall.png')
    },
    {
      title: '行业资讯',
      src:  'x',
      icon: require('../../static/icon/Industry_information.png')
    },
    {
      title: '入驻信息',
      src:  'x',
      icon: require('../../static/icon/enter_apply.png')
    },
    {
      title: '消息中心',
      src:  'xx',
      icon: require('../../static/icon/messages.png')
    }
  ])
  useEffect(()=>{
    //从store内获取获取用户登录状态/手机号
    setPhone(store.getState().phone);
    //监听用户登录状态变化
    store.subscribe(()=>{
      //同步登录状态
      setPhone(store.getState().phone);
    });
  },[]);
  //点击导航跳转到对应的路由
  const navToSomeUrl = function(item) {
    console.log(item);
  }
 
  return (
    <View>
      <BannerSwiper />
      {/* 测评小工具只再未登录是显示 */}
      {phone ? '' : <TestTool />}
      <View className="nav-list">
        {navItem.map((item, index) => {
          return(
            <View key={index} onClick={ () => {
              navToSomeUrl(item);
            }}>
              <Image  src={item.icon} />
              <Text>{item.title}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

// export default connect(mapStateToProps)(Index);
export default Index;



 
