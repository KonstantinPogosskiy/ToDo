import React, {useState} from 'react';
import classes from "./Task.module.css";
import EditInput from "../EditInput/EditInput";
import Button from "../UI/Button/Button";


const Task = (props) => {
    const [edit, setEdit] = useState(false);

    return (
        <div className={classes.task}>
            <div className={classes.checkbox}>
                <input
                    type="checkbox"
                    checked={props.checked}
                    onChange={() => props.moving(props.task.id)}/>
            </div>
            {edit === true
                ? <EditInput setValueEditInput={props.setValueEditInput}/>
                : <div className={classes.body}>
                    {props.task.body}
                </div>
            }

            {props.taskState === 'actual'
                ? <div className={classes.buttonCase}>
                    {edit === false
                        ? <Button
                            className={classes.button}
                            onClick={() => {
                                edit === true ? setEdit(false) : setEdit(true)
                                props.setEditId(props.task.id)
                            }
                            }
                        >
                            <img src="/assets/images/Edit.svg" alt="edit"/>

                        </Button>
                        : <Button
                            className={classes.button}
                            onClick={() => {
                                edit === true ? setEdit(false) : setEdit(true)
                                props.changeTask()
                            }}
                        >
                            <img src="/assets/images/Check.svg" alt="check"/>
                        </Button>
                    }
                    <Button
                        className={classes.button}
                        onClick={() => props.remove(props.task.id)}
                    >
                        <img src="/assets/images/Garbage.svg" alt="garbage"/>
                    </Button>
                </div>
                : <div className={classes.buttonCase}>
                    <Button
                        className={classes.button}
                        onClick={() => props.remove(props.task.id)}
                    >
                        <img src="/assets/images/Garbage.svg" alt="garbage"/>
                    </Button>
                </div>
            }

        </div>
    );
};

export default Task;
