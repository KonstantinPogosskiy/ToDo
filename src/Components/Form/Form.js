import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from './Form.module.css';

const Form = (props) => {
    const [value, setValue] = useState('');

    const add = (e) => {
        e.preventDefault()
        props.createTask(value)
    }

    return (
        <form onSubmit={add}>
            <Input
                onChange={e => setValue(e.target.value)}
                placeholder={'+ Add a task, press Enter to save'}
                type={'text'}
            />
            <Button
                className={classes.button}>
                Add
            </Button>
        </form>
    );
};

export default Form;