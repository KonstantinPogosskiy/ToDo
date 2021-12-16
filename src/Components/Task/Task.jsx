import React from 'react';
import "./Task.css";

const Task = (props) => {
    return (
        <div className="task">
            <input type="checkbox"/>
            {props.task}
        </div>
    );
};

export default Task;