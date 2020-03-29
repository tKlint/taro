import Taro, { useEffect, useState } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import BannerSwiper from '../../components/swiper';
import TestTool from '../../components/tips'
import TaskList from '../../components/taskList'
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
  //首页导航入口
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
  ]);
  //未登录下公开任务
  let openTaskData = {
    title: '最新任务',
    taskList: [{
      taskName: '市场营销推广服务1',
      companyName: '浙江景宁筑商信息科技有限公司',
      stateText: '招募中'
    },{
      taskName: '市场营销推广服务2',
      companyName: '浙江景宁筑商信息科技有限公司',
      stateText: '招募中'
    },{
      taskName: '市场营销推广服务3',
      companyName: '浙江景宁筑商信息科技有限公司',
      stateText: '招募中'
    },{
      taskName: '市场营销推广服务4',
      companyName: '浙江景宁筑商信息科技有限公司',
      stateText: '招募中'
    }]
  }
  //登录时指派任务
  let assignedTasks = {
    title: '指派任务',
    taskList: []
  }
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
  // setLoginState() {
  //   store.dispatch({
  //     type: 'LOGIN_STATE',
  //     payload: {
  //       phone: '18339635260'
  //     }
  //   })
  // }
  return (
    <View>
      <BannerSwiper />
      {/* 测评小工具只再未登录是显示 */}
      {phone ? '' : <TestTool />}
      <View className="nav-list">
        {navItem.map(item => {
          return(
            <View key={item.title} className="nav-item" onClick={() => {
              navToSomeUrl(item);
            }}>
              <Image className="nav-icon" src={item.icon} />
              <Text>{item.title}</Text>
            </View>
          )
        })}
      </View>
      {phone ? <TaskList prop={assignedTasks}/> : <TaskList prop={openTaskData} />}
        
    </View>
  )
}

export default Index;



 
