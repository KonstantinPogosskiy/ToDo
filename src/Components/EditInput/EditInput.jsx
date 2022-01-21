import React, {useState} from 'react';
import './EditInput.css';

const EditInput = (props) => {

    return (
        <div className='edit'>
            <input
                onChange={(e) => {
                    props.setValueEditInput(e.target.value)
                }}
                className='edit_input'
            />

        </div>
    );
};

export default EditInput;