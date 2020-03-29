import Taro, { useEffect, useState } from '@tarojs/taro'
import {View} from '@tarojs/components';
import './index.scss'

interface TaskData {
    title: string;
    taskList: Array<TaskItem>;
}
interface TaskItem {
    taskName: string;
    companyName: string;
    stateText: string;
}
function TaskList(props) {
    let [taskData, setTaskData] = useState<TaskData>({
        title: '',
        taskList: []
    })
    useEffect(() => {
        setTaskData({
            title: props.prop.title,
            taskList: props.prop.taskList,
        })
    }, [])
    return (
        <View className="task-content">
            <View className="task-type-title">{taskData.title}</View>
            {taskData.taskList.map((item, index) => {
                return (
                    // 最多只显示3个任务
                    index < 3 ? 
                    <View className="task-item" key={index}>
                        <View className="task-detail">
                            <View>{item.taskName}</View>
                            <View>{item.stateText}</View>
                        </View>
                        <View className="company-name">
                            {item.companyName}
                        </View>
                    </View> : null
                )
            })}
        </View>
    )
}
export default TaskList