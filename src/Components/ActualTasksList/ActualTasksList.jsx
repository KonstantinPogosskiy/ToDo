import React from 'react';
import Task from "../Task/Task";
import './ActualTasksList.css';

const ActualTasksList = (props) => {
    return (
        <div className="actual_area">
            <h2>To do ({props.task.length})</h2>
            <div className="actual_tasks">
                {props.task.map(task =>
                    <Task remove={props.remove} task={task} key={props.id}/>
                )}
            </div>
        </div>
    );
};

export default ActualTasksList;