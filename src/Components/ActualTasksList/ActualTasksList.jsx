import React, {useState} from 'react';
import Task from "../Task/Task";
import './ActualTasksList.css';
import Button from "../UI/Button/Button";
import "../ActualTasksList/ActualTasksList.css";

const ActualTasksList = (props) => {
const [edit, setEdit] = useState(true);

    return (
        <div className="actual_area">
            <h2>To do ({props.task.length})</h2>
            <div className="actual_tasks">
                {props.task.map(task =>
                    <Task
                        disabled={edit}
                        task={task}
                        key={props.id}
                        moving={props.moving}>
                        <Button
                            onClick={() => {
                                //props.setModal(true)
                                props.editEntries(task.id)
                            }
                            }
                        >
                            <img src="/assets/images/Edit.svg" alt="edit"/>
                        </Button>
                        <Button
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