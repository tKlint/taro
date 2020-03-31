import Taro, { useEffect, useState } from '@tarojs/taro';
import { View, Text, Image,Button } from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui";
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
  let [navItem] = useState<NavItemFace[]>([
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
  let [isopen,setIsopen] = useState<boolean>(false)
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
  const loginModal = function() {
    setIsopen(true);
}
  return (
    <View>
      <BannerSwiper />
      {/* 测评小工具只再未登录是显示 */}
      {phone ? null : <View className="test-warp"><TestTool/></View>}
      <View className="nav-list">
        {navItem.map(item => {
            return(
              <View key={item.title} className="nav-item" onClick={() => {
                // navToSomeUrl(item);
                loginModal();
              }}>
                <Image className="nav-icon" src={item.icon} />
                <Text>{item.title}</Text>
              </View>
            )
          })}
      </View>
      {phone ? <
        TaskList prop={assignedTasks}/> : 
        <TaskList prop={openTaskData} maxCount={3} />
      }
      <AtModal isOpened={true}>
        <AtModalHeader>标题</AtModalHeader>
        <AtModalContent>
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
        </AtModalContent>
        <AtModalAction> <Button>取消</Button> <Button>确定</Button> </AtModalAction>
      </AtModal>
      <Button onClick={() => {loginModal()}}>ok</Button>
    </View>
  )
}

export default Index;



 
