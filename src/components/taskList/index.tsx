import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components';
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
    });
    let [maxCount, setMaxCount] = useState<number|string>(0);
    useEffect(() => {
        setTaskData({
            title: props.prop.title,
            taskList: props.prop.taskList,
        });
        props.maxCount === 'infinity' ? setMaxCount(props.prop.taskList.length) : setMaxCount(props.maxCount);
    }, []);
    return (
        <View className="task-content">
            <View className="task-type-title">{taskData.title}</View>
            {
                taskData.taskList.length === 0 ? <View className="no-data">暂无指派任务</View> :
                taskData.taskList.map((item, index) => {
                    return (
                        // 最多只显示3个任务
                        index < maxCount ? 
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
                })
            }
        </View>
    )
}
export default TaskList