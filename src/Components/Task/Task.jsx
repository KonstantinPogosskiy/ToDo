import React from 'react';
import "./Task.css";

const Task = (props) => {

    return (
        <div className="task">
            <div className="checkbox">
                <input
                    type="checkbox"
                    checked={props.checked}
                    onChange={() => props.moving(props.task.id)}/>
            </div>
            <input className="body" value={props.task.body} disabled={props.disabled}/>
            <div className="buttonCase">
                {props.children}
            </div>
        </div>
    );
};

export default Task;