import { GET_TASKS } from "../actionTypes/tasks";
import { addTasks } from "../actionCreators/tasks";

const tasks = (store) => (next) => (action) => {
    if (action.type !== GET_TASKS) {
        next(action);
        return;
    }

    setTimeout(() => {
        next(addTasks("Response"));
    }, 2000);
};

export default tasks;