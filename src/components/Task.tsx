import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { MouseEvent } from 'react';

interface TaskProps {
    id: number;
    taskDescription: string;
    isComplete: boolean;
    completeTaskHandler: (taskId: number) => void;
    removeTaskHandler: (taskId: number) => void;
}

export function Task({ id, taskDescription, isComplete, completeTaskHandler, removeTaskHandler }: TaskProps) {
    function handleCompleteTask(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        completeTaskHandler(parseInt(event.currentTarget.id))
    }

    function handleRemoveTask(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        removeTaskHandler(parseInt(event.currentTarget.id))
    }

    return (
        <div id={id.toString()} className={ isComplete ? styles.completedTaskWrapper : styles.wrapper }>
            <button id={id.toString()} className={styles.completeTaskButton} disabled={ isComplete ? true : false } onClick={handleCompleteTask}>
                <Check id={id.toString()} size={16} />
            </button>
            <p>{taskDescription}</p>
            <button id={id.toString()} className={styles.deleteTaskButton} onClick={handleRemoveTask}>
                <Trash id={id.toString()} size={24} />
            </button>
        </div>
    )
}