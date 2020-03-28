import Taro, { useEffect } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import store from '../../store'
import './index.scss'
function TestTool() {

  return (
    <View className="test-box">
      <View className="test-title">
        <Text>预计您年度到手收入将增加</Text>
        <Text>￥10,000</Text>
      </View>
      <Button>开始测评</Button>
    </View>
  )

}
export default TestTool