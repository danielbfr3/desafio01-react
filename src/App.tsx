import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskCounter } from './components/TaskCounter';
import { TaskList } from './components/TaskList';


import styles from './App.module.css';
import './global.css';
import { useState } from 'react';

export function App() {
    interface Task {
        id: number;
        taskDescription: string;
        isComplete: boolean;
    }

    const [ tasks, setTasks ] = useState<Task[]>([])
    const [ idCounter, setIdCounter ] = useState(0);

    function addTask(taskDescription: string) {
        setTasks([...tasks, {
            id: idCounter,
            taskDescription: taskDescription,
            isComplete: false
        }])
        setIdCounter(idCounter + 1);
    }

    function deleteTask(taskId: number) {
        const filteredTasks = tasks.filter(task => task.id !== taskId);
        setTasks(filteredTasks);
        console.log(taskId, tasks, filteredTasks)
    }

    function completeTask(taskId: number) {
        const updatedTasks = tasks.map((taskItem) => {
            if (taskItem.id === taskId) {
                return { ...taskItem, isComplete: !taskItem.isComplete };
            }
            return taskItem
        })
        setTasks(updatedTasks)
    }

    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <TaskInput addTaskHandler={addTask} />
                <main>
                    <TaskCounter allTasks={tasks} />
                    <TaskList 
                        allTasks={tasks} 
                        completeTaskHandler={completeTask} 
                        removeTaskHandler={deleteTask} 
                    />
                </main>
            </div>

        </div>
    );
}
