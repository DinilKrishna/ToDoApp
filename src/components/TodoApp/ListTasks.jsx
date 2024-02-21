import React, { useState } from 'react';

const ListTasks = ({ task, index, removeTask, editTask }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedTask, setEditedTask] = useState(task.title);

    const handleEdit = () => {
        if (editedTask.trim() !== "" && /^[a-zA-Z\s]*$/.test(editedTask)) {
            setEditMode(false);
            editTask(index, editedTask); 
        }
    };

    return (
        <div>
            <div className='flex justify-between items-center text-lg font-bold border border-lime-400 italic text-yellow-400 rounded-md p-2 m-2'>
                {editMode ? (
                    <input
                        type="text"
                        className='font-bold text-black bg-white border border-lime-300 rounded-lg p-2 mx-2 w-full'
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                ) : (
                    <div className='inline-block'>{task.title}</div>
                )}
                <div>
                    {editMode ? (
                        <button
                            onClick={handleEdit}
                            className='rounded-md text-xl px-2 py-2 border-2 border-green-300 cursor-pointer text-black bg-green-600 mx-2'
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={() => setEditMode(true)}
                            className='rounded-md text-xl px-2 py-2 border-2 border-blue-300 cursor-pointer text-black bg-blue-600 mx-2'
                        >
                            Edit
                        </button>
                    )}
                    <button
                        onClick={() => removeTask(index)}
                        className='rounded-md text-xl px-2 py-2 border-2 border-red-300 cursor-pointer text-black bg-red-800'
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListTasks;
