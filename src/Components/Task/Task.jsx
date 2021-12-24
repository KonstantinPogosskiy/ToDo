import React from 'react';
import "./Task.css";

const Task = (props) => {

    return (
        <div className="task">
            <div className="checkbox">
                <input
                    type="checkbox"
                    checked={props.checked}
                    onChange={() => props.movingTask(props.task.id)}/>
            </div>
            <div className="body">
                {props.task.body}
            </div>
            <div className="buttonCase">
                {props.children}
            </div>
        </div>
    );
};

export default Task;