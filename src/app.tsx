import Taro, { Component,Config } from '@tarojs/taro'
import Index from './pages/index'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import './app.scss'
import 'taro-ui/dist/style/index.scss'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
class App extends Component {
  constructor(props) {
    super(props);
    configStore.subscribe(():void=>{
      console.log('state状态改变了，新状态如下');
      console.log(configStore.getState());
    });
    console.log(this.$router);
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config:Config =  {
    pages:[
        'pages/index/index', 
        'pages/myTask/index',
        'pages/wage/index',
        'pages/mine/index',
        'pages/login/index',
    ],
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "static/icon/home.png",
        selectedIconPath: "static/icon/home-active.png"
      }, {
        pagePath: "pages/myTask/index",
        text: "我的任务",
        selectedIconPath: "static/icon/task-active.png",
        iconPath: "static/icon/task.png",
      },{
        pagePath: "pages/wage/index",
        text: "收入",
        iconPath: "static/icon/income.png",
        selectedIconPath: "static/icon/income-active.png"
      },{
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "static/icon/my.png",
        selectedIconPath: "static/icon/my-active.png"
      }],
      color: '#bdbdbd',
      selectedColor: '#346BF5',
      backgroundColor: '#fff',
      borderStyle: 'black',
    },
    "window": {
      "navigationStyle": "custom"
    }
  }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={configStore}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
