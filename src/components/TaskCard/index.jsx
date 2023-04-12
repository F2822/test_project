import React, { useContext, useState, useSyncExternalStore } from "react";
import { TASK_STATUSES } from "../../constants/task";
import { ThemeContext, THEMES } from "../../App";

import "./index.css";

/**
 * @typedef TaskCardProps
 * @property {number} id
 * @property {string} text Text of the card
 * @property {string} status
 * @property {(id: number, newText: string) => void} onEdit
 * @property {(id: number) => void} onDelete
 * @property {(id: number, newStatus: string) => void} onStatusChange
 */

/**
 * Card for task
 * @param {TaskCardProps} props Props of the component
 * @returns {JSX}
 */
const TaskCard = (props) => {
    const theme = useContext(ThemeContext);

    const [isEditMode, setIsEditMode] = useState(false);
    const [newText, setNewText] = useState(props.text);

    const handleEditToggleClick = () => {
        setIsEditMode((prevState) => !prevState);

        if (isEditMode) {
            props.onEdit(props.id, newText);
        }
    }

    const handleStatusChange = (event) => {
        props.onStatusChange(props.id, event.target.value);
    };

    const deleteButton = props.status === TASK_STATUSES.done && (
        <button
            className="task-card__delete-button"
            onClick={() => props.onDelete(props.id)}
        >
            x
        </button>
    );

    let taskCardClasses = "task-card";
    if (theme === THEMES.dark) {
        taskCardClasses += " task-card_dark";
    }

    return (
        <div className={taskCardClasses}>
            {/*
            // First variant
            <input
                id="edit-mode-toggle"
                type="checkbox"
                checked={isEditMode}
                onChange={() => setIsEditMode((prevState) => !prevState)}
            />
            <label htmlFor="edit-mode-toggle">Edit mode</label>
            */}
            <button type="button" onClick={handleEditToggleClick}>
                {isEditMode ? "Finish" : "Edit"}
            </button>
            {
                isEditMode
                    ? (
                        <input
                            type="text"
                            value={newText}
                            onChange={(event) => setNewText(event.target.value)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    props.onEdit(props.id, newText);
                                    setIsEditMode(false);
                                }
                            }}
                        />
                    )
                    : (
                        <p>{props.text}</p>
                    )
            }
            {deleteButton}
            <select defaultValue={props.status} onChange={handleStatusChange}>
                {Object.values(TASK_STATUSES).map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default TaskCard;