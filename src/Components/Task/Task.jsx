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
            <div className={classes.body}>
                {props.task.body}
            </div>
            <div className={classes.buttonCase}>
                {props.children}
            </div>
        </div>
    );
};

export default Task;
