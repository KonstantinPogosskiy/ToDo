import React from 'react';
import './CompletedTasksList.module.css';
import Task from "../Task/Task";
import Button from "../UI/Button/Button";
import classes from "../CompletedTasksList/CompletedTasksList.module.css";

const CompletedTasksList = (props) => {
    return (
        <div>
            <div className={classes.completed_area}>
                <h2>Completed ({props.task.length})</h2>
                <div className={classes.completed_tasks}>
                    {props.task.map(task =>
                        <Task
                            disabled={true}
                            checked={true}
                            taskState={'complete'}
                            remove={props.remove}
                            task={task}
                            key={props.id}
                            moving={props.moving}
                        >
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
        </div>
    );
};

export default CompletedTasksList;