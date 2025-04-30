import React from 'react';

function EmployeCards(props) {
  return (
    <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[250px] m-4">
      <div className="bg-white shadow-xl rounded-xl p-5 hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer">
        <div className="space-y-2">
          <h5 className="text-lg font-bold">{props.empname}</h5>
          <p className="text-sm">
            <span className="font-semibold">Email:</span> {props.email}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Password:</span> {props.pass}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Tasks:</span> {props.tasks}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmployeCards;
