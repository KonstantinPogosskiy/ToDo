import React, {useState} from 'react';
import Task from "../Task/Task";
import './ActualTasksList.module.css';
import classes from "./ActualTasksList.module.css";

const ActualTasksList = (props) => {

    return (
        <div className={classes.actual_area}>
            <h2>To do ({props.task.length})</h2>
            <div className={classes.actual_tasks}>
                {props.task.map(task =>
                    <Task
                        checked={false}
                        taskState={'actual'}
                        remove={props.remove}
                        task={task}
                        key={props.id}
                        moving={props.moving}
                        changeTask={props.changeTask}
                        setValueEditInput={props.setValueEditInput}
                        setEditId={props.setEditId}
                    >
                    </Task>
                )}
            </div>
        </div>
    );
};

export default ActualTasksList;