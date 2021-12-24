import React from 'react';
import classes from "./Task.module.css";

const Task = (props) => {

    return (
        <div className={classes.task}>
            <div className={classes.checkbox}>
                <input
                    type="checkbox"
                    onChange={() => props.movingTask(props.task.id)}/>
            </div>
            <div className={classes.body}>
                {props.task.body}
            </div>
            <div className={classes.buttonCase} >
                {props.children}
            </div>
        </div>
    );
};

export default Task;