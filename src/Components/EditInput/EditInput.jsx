import React, {useState} from 'react';
import './EditInput.css';

const EditInput = (props) => {
    const [editInput, setEditInput] = useState('')
        //props.changeTask(editInput)
    return (
        <div className='edit'>
            <input
                onChange={(e) => {
                    setEditInput(e.target.value)
                }}
                className='edit_input'
            />

        </div>
    );
};

export default EditInput;