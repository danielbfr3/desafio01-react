import { Notepad } from 'phosphor-react';
import { Task } from './Task';
import styles from './TaskList.module.css';

interface Task {
    id: number;
    taskDescription: string;
    isComplete: boolean;
}

interface TaskListProps {
    allTasks: Task[],
    completeTaskHandler: (taskId: number) => void;
    removeTaskHandler: (taskId: number) => void;

}

export function TaskList({ allTasks, completeTaskHandler, removeTaskHandler }: TaskListProps) {
    const orderedTasks = allTasks.sort((a, b) => {
        // Ordena por 'isComplete' primeiro (tarefas não completas primeiro)
        if (a.isComplete !== b.isComplete) {
          return a.isComplete ? 1 : -1;
        }
      
        // Se ambas as tarefas têm o mesmo status de conclusão, ordena por 'id'
        return a.id - b.id;
      });

    if (orderedTasks.length > 0) {
        return (
            <div className={styles.wrapper}>
                {allTasks.map((taskItem) => {
                    return <p><Task 
                        id={taskItem.id} 
                        taskDescription={taskItem.taskDescription} 
                        isComplete={taskItem.isComplete} 
                        completeTaskHandler={completeTaskHandler}
                        removeTaskHandler={removeTaskHandler}
                    /></p>
                })}
            </div>
        )
    } else {
        return (
            <div className={styles.wrapperEmpty}>
                <Notepad size={56} />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        )
    }
}