import styles from './TaskInput.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface TaskInputProps {
    addTaskHandler: (comtaskDescriptionent: string) => void;
}

export function TaskInput({ addTaskHandler }: TaskInputProps) {
    const [newTaskText, setNewTaskText] = useState<string>('');

    function handleAddTask(event: FormEvent) {
        event.preventDefault();
        addTaskHandler(newTaskText);
        setNewTaskText('');
    }

    function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);

    }

    return (
        <form className={styles.taskForm}>
            <input placeholder="Adicione uma nova tarefa" onChange={handleNewTaskTextChange} value={newTaskText}></input>
            <button type="submit" onClick={handleAddTask}>Criar<PlusCircle size={24} /></button>
        </form>
    )
}