import { Config } from '@tarojs/taro'

const rootConfig:Config = {
    pages: [
        'pages/index/index',
        'pages/myTask/index',
        'pages/wage/index',
        'pages/mine/index',
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
        }, {
            pagePath: "pages/mine/index",
            text: "我的",
            iconPath: "static/icon/my.png",
            selectedIconPath: "static/icon/my-active.png"
        }],
        color: '#bdbdbd',
        selectedColor: '#346BF5',
        backgroundColor: '#fff',
        borderStyle: 'black'
    },
    "window": {
        "navigationStyle": 'custom'
    }
}

export default rootConfig