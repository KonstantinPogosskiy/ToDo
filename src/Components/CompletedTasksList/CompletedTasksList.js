import React from 'react';
import './CompletedTasksList.css';
import Task from "../Task/Task";

const CompletedTasksList = (props) => {
    return (
        <div className="completed_area">
            <h2>Completed ({props.task.length})</h2>
            <div className="completed_tasks">
                {props.task.map(task =>
                    <Task task={task} key={props.id}/>
                )}
            </div>
        </div>
    );
};

export default CompletedTasksList;