import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/header';
import { setlocalStorge } from '../utils/localstoageData';
import EmployeCards from '../components/employeCards';
import AddEmploye from '../components/addEmploye';
import { empData } from '../components/contextApi/empdataContext';

function Admindashboard() {
  const [tasks, setTasks] = useState({
    title: '',
    desc: '',
    status: '',
    emp: "",
    asdate: '',
    daddate: ''
  })
  const [isdata, setIsdata] = useState(false)
  const { localDatas, setLocalDatas } = useContext(empData)
  const inputChange = (e) => {
    const { name, value } = e.target
    setTasks(prevData => ({ ...prevData, [name]: value }))
  }


  function assgineTask() {
    if (!tasks.title || !tasks.desc || !tasks.emp || !tasks.asdate || !tasks.daddate) {
      alert("please enter your task details")
      console.log(localDatas.empData)

    } else {
      console.log(tasks)

      let updatedEmpData = localDatas.empData.map(emp => {
        let i = emp.tasks.length + 1

        console.log(i)
        if (emp.id === tasks.emp) {

          return {
            ...emp, tasks: [...emp.tasks, {
              title: tasks.title,
              description: tasks.desc,
              status: tasks.status,
              id: "task10" + i,
              assignedDate: tasks.asdate,
              deadline: tasks.daddate
            }]
          }; // Append new task
        }
       
        return emp;
      });
      // }
      setLocalDatas(prevState => ({
        ...prevState,
        empData: updatedEmpData
      }));
      // localStorage.setItem("data"+i,JSON.stringify(tasks))
    setTimeout(() => {
      setTasks({
        title: '',
        desc: '',
        status: '',
        emp: "",
        asdate: '',
        daddate: ''})

    }, 1000);
    
    }
  }
  function createNewEmp(){
    if(isdata===true){
      setIsdata(false)
    }else{
      setIsdata(true)
    }
   
  }   

  return (
    <>
      <Header />
      <button onClick={createNewEmp} className='btn bg-gray-400 rounded'>Add New emp</button>
   {isdata ?  <AddEmploye />:null}
   
      <div className='flex flex-col lg:flex-row md:flex-col justify-evenly w-full'>
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-semibold text-center mb-6">Assign Task</h2>

          <div className="space-y-4">
            {/* Task Title */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <label htmlFor="task-title" className="sm:w-1/4 font-semibold">Task Title</label>
              <input
                type="text"
                id="task-title"
                name='title'
                value={tasks.title}
                onChange={inputChange}
                placeholder="Enter task title"
                className="w-full sm:w-3/4 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Task Description */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <label htmlFor="task-desc" className="sm:w-1/4 font-semibold">Task Description</label>
              <textarea
                id="task-desc"
                name='desc'
                value={tasks.desc}
                onChange={inputChange}
                placeholder="Enter task description"
                className="w-full sm:w-3/4 p-2 border border-gray-300 rounded-md"
              />
            </div>
            {/* status  */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <label htmlFor="task-desc" className="sm:w-1/4 font-semibold">Status</label>
              <textarea
                id="task-desc"
                name='status'
                value={tasks.status}
                onChange={inputChange}
                placeholder="Enter task status"
                className="w-full sm:w-3/4 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Assign to Employee */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <label htmlFor="assign-to" className="sm:w-1/4 font-semibold">Assign to Employee</label>
              <select
                id="assign-to"
                name='emp'
                value={tasks.emp}
                onChange={inputChange}
                className="w-full sm:w-3/4 p-2 border border-gray-300 rounded-md"
              >
                <option value="">select</option>
                {
                  localDatas.empData.map((emp) => {
                    return <option key={emp.id} value={emp.id}>{emp.id}</option>
                  })
                }
              </select>
            </div>

            {/* Task Assign Date */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <label htmlFor="task-assign-date" className="sm:w-1/4 font-semibold">Task Assign Date</label>
              <input
                type="date"
                id="task-assign-date"
                name='asdate'
                value={tasks.asdate}
                onChange={inputChange}
                className="w-full sm:w-3/4 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Deadline Date */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <label htmlFor="deadline-date" className="sm:w-1/4 font-semibold">Deadline Date</label>
              <input
                type="date"
                id="deadline-date"
                name='daddate'
                value={tasks.daddate}
                onChange={inputChange}
                className="w-full sm:w-3/4 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Assign Task Button */}
            <div className="flex justify-center mt-6">
              <button onClick={assgineTask} className="bg-blue-400 p-2 rounded-md text-white hover:bg-blue-500 transition duration-300">
                Assign Task
              </button>
            </div>
          </div>
        </div>
        {/* right side employee Cards   */}
        <div id='employeside-bar' className='flex lg:flex-col md:flex-row overflow-auto border-2 h-55 lg:w-50 w-full md:w-full rounded'>
          {
            localDatas.empData.map(item => (
              <EmployeCards
                key={item.id}
                empname={item.name}
                email={item.email}
                pass={item.password}
                tasks={item.tasks.length}
              />
            ))
          }

        </div>
      </div>

    </>
  );
}

export default Admindashboard;
