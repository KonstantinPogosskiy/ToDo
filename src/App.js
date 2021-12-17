import './App.css';
import Navbar from "./Components/UI/Navbar/Navbar";
import Form from "./Components/Form/Form";
import Sidebar from "./Components/UI/Sidebar/Sidebar";
import ActualTasksList from "./Components/ActualTasksList/ActualTasksList";
import CompletedTasksList from "./Components/CompletedTasksList/CompletedTasksList";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]);
    const [comTasks, setComTasks] = useState([]);

    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
    }
    const deleteTask = (newTask) => {
        tasks.pop()
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
                    <ActualTasksList deleteTask={deleteTask} task={tasks}/>
                </div>
                <CompletedTasksList task={comTasks}/>
            </div>
        </div>
    );
}

export default App;
