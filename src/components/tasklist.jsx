import React from 'react';

function Tasklist(props) {
  return (
    <div
      className={`${
        props.bgColor || 'bg-blue-100'
      } gap-3 w-[300px] h-[280px] rounded-2xl m-5 p-4 flex-shrink-0 flex flex-col shadow-lg`}
    >
      {/* Status */}
      <div>
        <span className="text-xs font-medium text-white px-3 py-1 rounded-full bg-red-600">
          Status: {props.status}
        </span>
      </div>

      {/* Dates */}
      <div className="flex justify-between text-sm text-white">
        <span className="bg-green-600 px-2 py-1 rounded-full">
          Start: {props.assginDate}
        </span>
        <span className="bg-blue-600 px-2 py-1 rounded-full">
          End: {props.deadlinDate}
        </span>
      </div>

      {/* Task Info */}
      <div className="mt-2 text-sm text-gray-800">
        <h1 className="font-semibold text-lg mb-1">
          Task: {props.taskTitle}
        </h1>
        <p className="text-gray-700 mb-1 font-medium">Details:</p>
        <div className="border border-gray-200 rounded-lg bg-white p-2 text-sm h-[90px] overflow-y-auto">
          {props.taskDesc}
        </div>
      </div>
    </div>
  );
}

export default Tasklist;
