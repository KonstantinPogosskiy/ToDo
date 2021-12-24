import React from 'react';
import './CompletedTasksList.css';
import Task from "../Task/Task";
import Button from "../UI/Button/Button";

const CompletedTasksList = (props) => {
    return (
        <div className="completed_area">
            <h2>Completed ({props.task.length})</h2>
            <div className="completed_tasks">
                {props.task.map(task =>
                    <Task
                        checked={true}
                        task={task}
                        key={props.id}
                        moving={props.moving}
                    >
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

export default CompletedTasksList;