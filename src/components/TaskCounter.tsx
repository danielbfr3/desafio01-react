import styles from './TaskCounter.module.css';

interface Task {
    id: number;
    taskDescription: string;
    isComplete: boolean;
}

interface TaskCounterProps {
    allTasks: Task[]
}

export function TaskCounter({ allTasks }: TaskCounterProps) {
    const completedTasks = allTasks.filter(task => task.isComplete);

    const totalTasks = allTasks.length;
    const totalCompletedTasks = completedTasks.length;

    return (
        <div className={styles.wrapper}>
            <div className={styles.tasksCreated}>
                <p>Tarefas criadas<span>{totalTasks}</span></p>
            </div>
            <div className={styles.tasksDone}>
                <p>Tarefas concluídas<span>{totalCompletedTasks} de {totalTasks}</span></p>
            </div>
        </div>
    )
}