import React, {useState} from 'react';
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
                <Button className={classes.button}>
                    <img src="/assets/images/Edit.svg" alt="edit"/>
                </Button>
                <Button
                    className={classes.button}
                    onClick={() => props.remove(props.task.id)}
                >
                    <img src="/assets/images/Garbage.svg" alt="garbage"/>
                </Button>
            </div>
        </div>
    );
};

export default Task;