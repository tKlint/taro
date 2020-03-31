import Taro,{useEffect} from '@tarojs/taro';
import {Text, View} from '@tarojs/components';
import store from '../../store'


function MyTask() {
    useEffect( () => {
        store.dispatch(dispatch => {
            dispatch({
              type: 'LOGIN_STATE',
              payload: {
                phone: '18339635260'
              }
            })
          })
        console.log(store.getState());
    })
    return (
        <View>
            <Text>
                登录
            </Text>
        </View>
    )
}
export default MyTask
 