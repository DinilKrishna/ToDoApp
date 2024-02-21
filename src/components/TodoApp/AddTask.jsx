import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [value, setValue] = useState("");
    const addItem = () => {
        if (value.trim() !== "" && /^[a-zA-Z\s]*$/.test(value)) {
            addTask(value);
            setValue("");
          }
    };
  return (
    <>
        <div className='bg-black p-2 m-2 rounded-lg border-2 border-lime-400'>
            <input type="text" className='font-bold text-black bg-white border border-lime-300 rounded-lg p-2 m-4 w-100'
            placeholder='Add New Task'
            value={value}
            onChange={(e)=>{setValue(e.target.value);}}
            />
            <button onClick={addItem} className='rounded-md text-2xl p-2 mx-2 border-2 border-green-300 cursor-pointe text-black bg-green-600'>ADD</button>
        </div>
    </>
  )
}

export default AddTask