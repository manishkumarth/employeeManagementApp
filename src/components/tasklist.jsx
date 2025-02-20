import React from 'react'

function Tasklist(props) {
  return (
    <div className={`${props.bgColor} gap-2 w-[300px] h-[250px] rounded-xl m-5 flex-shrink-0 flex flex-col shadow-md`}>
      <div className=''>
        <span className="text-white p-1 bg-red-600">status:{props.status}</span>
      </div>
      <div className="flex justify-between w-full">
        <span className="bg-red-400 rounded-xl p-1">start:{props.assginDate}</span>
        <span className="bg-red-400 rounded-xl p-1">end:{props.deadlinDate}</span>
      </div>
      <div>
        <h1>Task-Name:{props.taskTitle}</h1>
        <p >Task-Details: </p>
        <div className='border border-gray-100 rounded bg-white h-25 text-wrap'>{props.taskDesc}</div>
      </div>
    </div>

  )
}
export default Tasklist