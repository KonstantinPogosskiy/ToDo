import React, {useState} from 'react';
import Task from "../Task/Task";
import './ActualTasksList.module.css';
import Button from "../UI/Button/Button";
import classes from "./ActualTasksList.module.css";

const ActualTasksList = (props) => {
    const [edit, setEdit] = useState(true);

    return (
        <div className={classes.actual_area}>
            <h2>To do ({props.task.length})</h2>
            <div className={classes.actual_tasks}>
                {props.task.map(task =>
                    <Task
                        setTaskInputValue={props.setTaskInputValue}
                        disabled={edit}
                        checked={false}
                        task={task}
                        key={props.id}
                        moving={props.moving}
                    >
                        <Button
                            className={classes.button}
                            onClick={() => {
                                edit === true ? setEdit(false) : setEdit(true)
                                props.setEditId(task.id)
                            }
                            }
                        >
                            <img src="/assets/images/Edit.svg" alt="edit"/>

                        </Button>
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

export default ActualTasksList;