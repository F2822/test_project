import React, { useState } from "react";
import { connect } from "react-redux";
import TaskInput from "../TaskInput";
import TaskCard from "../TaskCard";
import {
    getTasks,
    addTask,
    editTask,
    deleteTask,
    changeTaskStatus
} from "../../redux/actionCreators/tasks";

import { TASK_STATUSES } from "../../constants/task";

import "./index.css";

/**
 * @typedef TaskTableProps
 * @property {Object[]} taskList
 * @property {() => void} onGetTasks
 * @property {(text: string) => void} onTaskAdd
 * @property {(id: number, text: string) => void} onTaskEdit
 * @property {(id: number) => void} onTaskDelete
 * @property {(id: number, newStatus: string) => void} onTaskStatusChange
    
 }} onTaskAdd
 */

/**
 * @param {TaskTableProps} props 
 * @returns 
 */
const TaskTable = (props) => {
    const todoTaskList = props.taskList.filter((item) => item.status === TASK_STATUSES.todo);
    const inProgressTaskList = props.taskList.filter((item) => item.status === TASK_STATUSES.inProgress);
    const doneTaskList = props.taskList.filter((item) => item.status === TASK_STATUSES.done);

    return (
        <div>
            <button type="button" onClick={props.onGetTasks}>Get tasks</button>
            <TaskInput onAdd={props.onTaskAdd} />
            <div className="task-table">
                <div className="task-table__column">
                    <h5 className="task-table__column-header">Todo</h5>
                    <div className="task-table__column-items">
                        {todoTaskList.map((item) => (
                            <TaskCard
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                status={item.status}
                                onEdit={props.onTaskEdit}
                                onDelete={props.onTaskDelete}
                                onStatusChange={props.onTaskStatusChange}
                            />
                        ))}
                    </div>
                </div>
                <div className="task-table__column">
                    <h5 className="task-table__column-header">In Progress</h5>
                    <div className="task-table__column-items">
                        {inProgressTaskList.map((item) => (
                            <TaskCard
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                status={item.status}
                                onEdit={props.onTaskEdit}
                                onDelete={props.onTaskDelete}
                                onStatusChange={props.onTaskStatusChange}
                            />
                        ))}
                    </div>
                </div>
                <div className="task-table__column">
                    <h5 className="task-table__column-header">Done</h5>
                    <div className="task-table__column-items">
                        {doneTaskList.map((item) => (
                            <TaskCard
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                status={item.status}
                                onEdit={props.onTaskEdit}
                                onDelete={props.onTaskDelete}
                                onStatusChange={props.onTaskStatusChange}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStoreToProps = (store) => ({
    taskList: store.tasks.taskList
});

const mapDispatchToProps = (dispatch) => ({
    onGetTasks: () => dispatch(getTasks()),
    onTaskAdd: (text) => dispatch(addTask(text)),
    onTaskEdit: (id, newText) => dispatch(editTask(id, newText)),
    onTaskDelete: (id) => dispatch(deleteTask(id)),
    onTaskStatusChange: (id, newStatus) => dispatch(changeTaskStatus(id, newStatus))
});

export default connect(mapStoreToProps, mapDispatchToProps)(TaskTable);