import React from 'react'

function EmployeCards(props) {
  return (
    <div>
        <div className="card shadow-lg p-3 mb-5 bg-white rounded w-full lg:[200px] sm:w-50 md:w-80 hover:bg-red-600 cursor-pointer">
            <div className="card-body">
                <h5 className="card-title">{props.empname}</h5>
                <p>Emal:{props.email}</p>
                <p>Pass:{props.pass}</p>
                <p>Tasks:{props.tasks}</p>
            </div>
        </div>
    </div>
  )
}

export default EmployeCards
