import { ADD_TASKS, ADD_TASK, EDIT_TASK, DELETE_TASK, CHANGE_TASK_STATUS } from "../actionTypes/tasks";
import { TASK_STATUSES } from "../../constants/task";

const initialStore = {
    taskList: []
};

const tasksReducer = (store = initialStore, action) => {
    switch (action.type) {
        case ADD_TASKS:
            console.log(action);
            return store;
        case ADD_TASK:
            return {
                ...store,
                taskList: [
                    ...store.taskList,
                    {
                        id: Date.now(),
                        text: action.payload.text,
                        status: TASK_STATUSES.todo
                    }
                ]
            };
        case EDIT_TASK:
            return {
                ...store,
                taskList: store.taskList.map((item) => {
                    if (item.id !== action.payload.id) {
                        return item;
                    } else {
                        item.text = action.payload.newText;
                        return item;
                    }
                })
            };
        case DELETE_TASK:
            return {
                ...store,
                taskList: store.taskList.filter((item) => item.id !== action.payload.id)
            };
        case CHANGE_TASK_STATUS:
            return {
                ...store,
                taskList: store.taskList.map((item) => {
                    if (item.id !== action.payload.id) {
                        return item;
                    } else {
                        item.status = action.payload.newStatus;
                        return item;
                    }
                })
            };
        default:
            return store;
    }
};

export default tasksReducer;