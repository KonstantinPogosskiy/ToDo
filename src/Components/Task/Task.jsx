import React from 'react';
import classes from "./Task.module.css";
import Button from "../UI/Button/Button";

const Task = (props) => {

    return (
        <div className={classes.task}>
            <div className={classes.checkbox}>
                <input type="checkbox"/>
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