import './App.css';
import Navbar from "./Components/UI/Navbar/Navbar";
import Form from "./Components/Form/Form";
import Sidebar from "./Components/UI/Sidebar/Sidebar";
import ActualTasksList from "./Components/ActualTasksList/ActualTasksList";
import CompletedTasksList from "./Components/CompletedTasksList/CompletedTasksList";
import React, {useState} from "react";
import MyModal from "./Components/UI/Modal/MyModal";
import Input from "./Components/UI/Input/Input";
import Button from "./Components/UI/Button/Button";

function App() {
    const [actualTasks, setActualTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [modal, setModal] = useState(false);

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
const editEntries = (task) => {
    setActualTasks(actualTasks.filter(item => item.id !== task))

    const selectedItems = actualTasks.find(item => item.id === task)
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
            <MyModal visible={modal} setVisible={setModal}>
                <Form selectedItems={editEntries.selectedItems}/>
            </MyModal>
            <div className="wrapper">
                <Sidebar sideImg={'/assets/images/Sidebar.svg'}/>
                <div>
                    <Form
                        createTask={createTask}
                    />
                    <ActualTasksList
                        editEntries={editEntries}
                        setModal={setModal}
                        remove={removeActualTask}
                        task={actualTasks}
                        moving={completeTask}/>
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