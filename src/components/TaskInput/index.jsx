import React, { useState } from "react";

import "./index.css";

/**
 * @typedef TaskInputProps
 * @property {(text: string) => void} onAdd
 */

/**
 * @param {TaskInputProps} props 
 * @returns 
 */
const TaskInput = (props) => {
    const [inputValue, setInputValue] = useState("");

    const handleAddClick = () => {
        props.onAdd(inputValue);
        setInputValue("");
    };

    return (
        <div className="task-input">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="button" onClick={handleAddClick}>Add</button>
        </div>
    );
};

export default TaskInput;