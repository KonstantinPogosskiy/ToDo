import React from 'react';
import classes from "./Task.module.css";

const Task = (props) => {

    return (
        <div className={classes.task}>
            <div className={classes.checkbox}>
                <input
                    type="checkbox"
                    checked={props.checked}
                    onChange={() => props.moving(props.task.id)}/>
            </div>
            <input
                onChange={e => props.setTaskInputValue({body: e.target.value})}
                className={classes.body}
                value={props.task.body}
                disabled={props.disabled}/>
            <div className={classes.buttonCase}>
                {props.children}
            </div>
        </div>
    );
};

export default Task;
