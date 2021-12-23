import './App.css';
import Navbar from "./Components/UI/Navbar/Navbar";
import Form from "./Components/Form/Form";
import Sidebar from "./Components/UI/Sidebar/Sidebar";
import ActualTasksList from "./Components/ActualTasksList/ActualTasksList";
import CompletedTasksList from "./Components/CompletedTasksList/CompletedTasksList";
import {useState} from "react";

function App() {
    const [actualTasks, setActualTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const createTask = (newTask) => {
        setActualTasks([...actualTasks, newTask])
    }
    const removeActualTask = (task) => {

        for(let i = 0; i < actualTasks.length; i++) {
            if(actualTasks[i].id === task) {
                setCompletedTasks([...completedTasks, actualTasks[i]])
                setActualTasks(actualTasks.filter(p => p.id !== task))
            }
        }
    }

    const removeCompletedTask = (task) => {

        for(let i = 0; i < completedTasks.length; i++) {
            if(completedTasks[i].id === task) {
                setCompletedTasks(completedTasks.filter(p => p.id !== task))
            }
        }
    }

    return (
        <div className="App">
            <div className="navbar">
                <Navbar
                    App_name={'To-Do'}
                    logo_source={'/assets/images/Vector.svg'}
                    user={'Leanne Graham'}
                    avatar={'/assets/images/Avatar.svg'}
                    alt={'avatar'}
                />
            </div>
            <div className="wrapper">
                <Sidebar sideImg={'/assets/images/Sidebar.svg'}/>
                <div>
                    <Form createTask={createTask}/>
                    <ActualTasksList remove={removeActualTask} task={actualTasks}/>
                </div>
                <CompletedTasksList remove={removeCompletedTask} task={completedTasks}/>
            </div>
        </div>
    );
}

export default App;