import './App.css';
import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import ActualTasksList from "./Components/ActualTasksList/ActualTasksList";
import CompletedTasksList from "./Components/CompletedTasksList/CompletedTasksList";
import Input from "./Components/UI/Input/Input";
import Button from "./Components/UI/Button/Button";
import classes from '../src/Components/UI/Button/Button.module.css';

function App() {
    const [actualTasks, setActualTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [value, setValue] = useState({body: ''});
    const [editId, setEditId] = useState('');
    const [valueEditInput, setValueEditInput] = useState('');

    const addTask = (e) => {
        e.preventDefault()
        if (value.body !== '') {
            const newTask = {
                ...value, id: Date.now()
            }
            createTask(newTask)
            setValue({body: ''})
        }
    }
    const createTask = (newTask) => {
        setActualTasks([...actualTasks, newTask])
    }
    const removeActualTask = (task) => {
        setActualTasks(actualTasks.filter(p => p.id !== task))
    }
    const removeCompletedTask = (task) => {
        setCompletedTasks(completedTasks.filter(p => p.id !== task))
    }
    const completeTask = (task) => {
        for (let i = 0; i < actualTasks.length; i++) {
            if (actualTasks[i].id === task) {
                setCompletedTasks([...completedTasks, actualTasks[i]])
                removeActualTask(task)
            }
        }
    }
    const returnTask = (task) => {
        for (let i = 0; i < completedTasks.length; i++) {
            if (completedTasks[i].id === task) {
                setActualTasks([...actualTasks, completedTasks[i]])
                removeCompletedTask(task)
            }
        }
    }
    const changeTask = () => {
        for (let i = 0; i < actualTasks.length; i++) {
            if(actualTasks[i].id === editId) {
                setActualTasks(actualTasks(actualTasks[i].body = valueEditInput || actualTasks[i].body))
            }
        }
    }

    return (
        <div className="App">
            <Header
                App_name={'To-Do'}
                logo="Vector.svg"
                user={'Leanne Graham'}
                avatar='Avatar.svg'
                alt={'avatar'}
            />
            <div className="wrapper">
                <Sidebar sideImg='Sidebar.svg'/>
                <div className="actual">
                    <Input
                        value={value.body}
                        onChange={e => setValue({...value, body: e.target.value})}
                        placeholder={'+ Add a task, press Enter to save'}
                        type={'text'}
                    />
                    <Button className={classes.button} onClick={addTask}>
                        Add
                    </Button>
                    <h3>Total: {actualTasks.length + completedTasks.length}</h3>
                    <ActualTasksList
                        remove={removeActualTask}
                        task={actualTasks}
                        moving={completeTask}
                        setEditId={setEditId}
                        changeTask={changeTask}
                        setValueEditInput={setValueEditInput}
                    />
                </div>
                <CompletedTasksList
                    remove={removeCompletedTask}
                    task={completedTasks}
                    moving={returnTask}
                />
            </div>
        </div>
    );
}

export default App;