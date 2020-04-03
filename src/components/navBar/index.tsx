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
}
function NavBar(prop:stateFace) {
    const statusBarHeight = Taro.getSystemInfoSync().statusBarHeight;
    return(
        <View className="navbar-box" style={`height:${statusBarHeight + 44}px;padding-top:${statusBarHeight}px`}>
            <View className="left-icon nav-item" onClick={()=>{prop.navClick }}>
                <Image src={prop.icon === 'backed' ? backed : home} />
            </View>
            <View className="navbar-title nav-item">{prop.title}</View>
            <View className="nav-item"></View>
        </View>
    )
}
// class NavBar extends Component<stateFace,stateFace>{
//     public props: stateFace = {
//         title: '',
//         icon: '',
//         navClick: ()=>{}
//     }
//     public state: stateFace = {
//         title: '',
//         icon: '',
//         navClick: ()=>{},
//         navHeight: 0
//     }
//     constructor(props,state) {
//         super(props,state);
//     }
    
//     componentDidMount(){
//         this.setState({
//             navHeight: Taro.getSystemInfoSync().statusBarHeight + 44
//         });
//         this.setState({
//             title: this.props.title ,
//             icon: this.props.icon,
//             navClick: this.props.navClick
//         })
//     }
//     render() {
//         return(
//             <View className="navbar-box" style={`height:${this.state.navHeight}px;padding-top:${Taro.getSystemInfoSync().statusBarHeight}px`}>
//                 <View className="left-icon nav-item" onClick={()=>{ this.props.navClick }}>
//                     <Image src={this.state.icon === 'backed' ? backed : home} />
//                 </View>
//                 <View className="navbar-title nav-item">{this.state.title}</View>
//                 <View className="nav-item"></View>
//             </View>
//         )
//     }
// }
// function Login(porps) {
//   useEffect(() => {
//     Taro.setNavigationBarTitle({
//       title: '',
//     })
   
//   })
//   return (
//     <View>
//       {/* <NavBar
//         isHome
//         title='' 
//         background='#346BF5' 
//         color='#ffffff' 
//         search
//         headerRight={[
//           {icon: {color: '#6afff9'}},
//           {icon: '\ue63a'},
//         ]}
//       /> */}
//       <Text>
//         ç™»å½•
//       </Text>
//     </View>
//   )
// }
// console.log(Login);
export default NavBar
