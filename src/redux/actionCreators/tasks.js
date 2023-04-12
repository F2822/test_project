import { ref, set, get } from "firebase/database";
import { database } from "../../firebase";
import {
    ADD_TASKS,
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
    CHANGE_TASK_STATUS
} from "../actionTypes/tasks";

export const getTasks = () => (dispatch) => {
    const tasksRef = ref(database, "tasks");

    get(tasksRef).then((snapshot) => {
        if (snapshot.exists()) {
            console.log({ tasks: snapshot.val() });
        }
    });

    setTimeout(() => {
        dispatch({
            type: ADD_TASKS,
            payload: "Success thunk request"
        });
    }, 2000);
};

export const addTask = (text) => ({
    type: ADD_TASK,
    payload: {
        text
    }
});

export const editTask = (id, newText) => ({
    type: EDIT_TASK,
    payload: {
        id,
        newText
    }
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {
        id
    }
});

export const changeTaskStatus = (id, newStatus) => ({
    type: CHANGE_TASK_STATUS,
    payload: {
        id,
        newStatus
    }
});
