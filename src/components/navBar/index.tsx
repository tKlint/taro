import Taro from '@tarojs/taro';
import {View, Image } from '@tarojs/components';
// import store from '../../store'
import home from './icon/home.png'
import backed from './icon/backed.png'

import './index.scss'
interface stateFace{
    title: string;
    icon: string;
    navClick: Function;
    custom?: string | boolean;
}
function NavBar(prop:stateFace) {
    const statusBarHeight = Taro.getSystemInfoSync().statusBarHeight;
    return(
        <View className={ prop.custom ? "custom-box navbar-box":"navbar-box"}  style={`height:${statusBarHeight + 44}px;padding-top:${statusBarHeight}px`}>
            <View className="left-icon nav-item" onClick={()=>{prop.navClick() }}>
                <Image src={prop.icon === 'backed' ? backed : home} />
            </View>
            <View className="navbar-title nav-item">{prop.title}</View>
            <View className="nav-item"></View>
        </View>
    )
}

export default NavBar
