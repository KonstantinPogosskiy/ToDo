import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from './Form.module.css';

const Form = (props) => {
    const [value, setValue] = useState({body: ''});

    const add = (e) => {
        e.preventDefault()
        if (value.body !== '') {
            const newTask = {
                ...value, id: Date.now()
            }
            props.createTask(newTask)
            setValue({body: ''})
        }
    }

    return (
        <form onSubmit={add}>
            <Input
                value={value.body}
                onChange={e => setValue({...value, body: e.target.value})}
                placeholder={'+ Add a task, press Enter to save'}
                type={'text'}
            />
            <Button
                className={classes.button}
            >
                Add
            </Button>
        </form>
    );
};

export default Form;