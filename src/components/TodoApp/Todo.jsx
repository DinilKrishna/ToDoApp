import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import ListTasks from './ListTasks';

const Todo = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        document.title = `You have ${tasks.length} pending tasks`;
    }, [tasks]);

    const addTask = (title) => {
        if(tasks.length < 5){
            const newTask = [...tasks, { title }];
            setTasks(newTask);
        }
        else{
            alert("Maximum Value Reached")
        }
    };

    const removeTask = (index) => {
        const newTask = [...tasks];
        newTask.splice(index, 1);
        setTasks(newTask);
    };

    const editTask = (index, editedTitle) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].title = editedTitle;
        setTasks(updatedTasks);
    };

    return (
        <>
            <div className='bg-black w-90vw mx-auto my-20 rounded-2xl p-2 text-white'>
                <div className='text-center text-4xl'>TODO APP</div>

                <div><AddTask addTask={addTask} /></div>
                <div>
                    {tasks.map((task, index) => (
                        <ListTasks
                            task={task}
                            removeTask={removeTask}
                            editTask={editTask} 
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Todo;
