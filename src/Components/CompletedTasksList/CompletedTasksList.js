import React from 'react';
import './CompletedTasksList.css';

const CompletedTasksList = (props) => {
    return (
        <div className="completed_area">
            <h2>Completed ({props.task.length})</h2>
            <div className="completed_tasks">

            </div>
        </div>
    );
};

export default CompletedTasksList;