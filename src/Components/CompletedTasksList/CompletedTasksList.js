import React from 'react';
import './CompletedTasksList.css';
import Task from "../Task/Task";
import Button from "../UI/Button/Button";
import classes from "../Task/Task.module.css";
import './CompletedTasksList.css';

const CompletedTasksList = (props) => {
    return (
        <div className="completed_area">
            <h2>Completed ({props.task.length})</h2>
            <div className="completed_tasks">
                {props.task.map(task =>
                    <Task task={task} key={props.id}>
                        <Button
                            className={classes.button}
                            onClick={() => props.remove(task.id)}
                        >
                            <img src="/assets/images/Garbage.svg" alt="garbage"/>
                        </Button>
                    </Task>
                )}
            </div>
        </div>
    );
};

export default CompletedTasksList;