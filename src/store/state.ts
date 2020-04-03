interface RootState {
    phone: string | number;
    assignedTask: Array<Task>;
    myTask: Array<Task>;
}
interface Task {
    id: number;
    task_name: string;
    ensureMoney: number;
    businessName: string;
    taskStatus: number;
    taskDescription: Array<string>;
}
const rootState: RootState = {
    phone: '',
    assignedTask: [],
    myTask: []
}
export default rootState