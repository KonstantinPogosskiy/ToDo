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
    const removeTask = (post) => {
console.log(actualTasks)
        for(let i = 0; i < actualTasks.length; i++) {
            if(actualTasks[i].id === post) {
                setCompletedTasks([...completedTasks, actualTasks[i]])
                actualTasks.splice(i, 1)
            }

        }
    }

    return (
        <div className="App">
            <Navbar
                App_name={'To-Do'}
                logo_source={'/assets/images/Vector.svg'}
                user={'Leanne Graham'}
                avatar={'/assets/images/Avatar.svg'}
                alt={'avatar'}
            />
            <div className="wrapper">
                <Sidebar sideImg={'/assets/images/Sidebar.svg'}/>
                <div>
                    <Form createTask={createTask}/>
                    <ActualTasksList remove={removeTask} task={actualTasks}/>
                </div>
                <CompletedTasksList task={completedTasks}/>
            </div>
        </div>
    );
}

export default App;