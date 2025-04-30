import React, { useContext, useState } from 'react';
import Header from '../components/header';
import EmployeCards from '../components/employeCards';
import AddEmploye from '../components/addEmploye';
import { empData } from '../components/contextApi/empdataContext';

function Admindashboard() {
  const [tasks, setTasks] = useState({
    title: '',
    desc: '',
    status: '',
    emp: '',
    asdate: '',
    daddate: '',
  });
  const [isdata, setIsdata] = useState(false);
  const { localDatas, setLocalDatas } = useContext(empData);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setTasks((prev) => ({ ...prev, [name]: value }));
  };

  const assgineTask = () => {
    if (!tasks.title || !tasks.desc || !tasks.emp || !tasks.asdate || !tasks.daddate) {
      return alert('Please enter all task details');
    }

    const updatedEmpData = localDatas.empData.map((emp) => {
      if (emp.id === tasks.emp) {
        const taskId = 'task10' + (emp.tasks.length + 1);
        return {
          ...emp,
          tasks: [...emp.tasks, {
            title: tasks.title,
            description: tasks.desc,
            status: tasks.status,
            id: taskId,
            assignedDate: tasks.asdate,
            deadline: tasks.daddate,
          }],
        };
      }
      return emp;
    });

    setLocalDatas((prev) => ({
      ...prev,
      empData: updatedEmpData,
    }));

    setTasks({
      title: '',
      desc: '',
      status: '',
      emp: '',
      asdate: '',
      daddate: '',
    });
  };

  return (
    <>
      <Header />

      <div className="p-4 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={() => setIsdata(!isdata)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
          >
            {isdata ? 'Close' : 'Add New Employee'}
          </button>
        </div>

        {isdata && <AddEmploye />}

        <div className="grid lg:grid-cols-2 gap-8 mt-6">
          {/* Assign Task Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Assign Task</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                value={tasks.title}
                onChange={inputChange}
                placeholder="Task Title"
                className="w-full p-2 border rounded-md"
              />

              <textarea
                name="desc"
                value={tasks.desc}
                onChange={inputChange}
                placeholder="Task Description"
                className="w-full p-2 border rounded-md"
              />

              <input
                type="text"
                name="status"
                value={tasks.status}
                onChange={inputChange}
                placeholder="Task Status"
                className="w-full p-2 border rounded-md"
              />

              <select
                name="emp"
                value={tasks.emp}
                onChange={inputChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Assign to</option>
                {localDatas.empData.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.name} ({emp.id})
                  </option>
                ))}
              </select>

              <div className="flex gap-4">
                <input
                  type="date"
                  name="asdate"
                  value={tasks.asdate}
                  onChange={inputChange}
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="date"
                  name="daddate"
                  value={tasks.daddate}
                  onChange={inputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <button
                onClick={assgineTask}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md transition"
              >
                Assign Task
              </button>
            </div>
          </div>

          {/* Employee Cards Panel */}
          <div className="bg-white p-4 rounded-lg shadow-md overflow-y-auto max-h-[500px]">
            <h2 className="text-xl font-semibold text-center mb-4">Employee List</h2>
            {localDatas.empData.length > 0 ? (
              localDatas.empData.map((item) => (
                <EmployeCards
                  key={item.id}
                  empname={item.name}
                  email={item.email}
                  pass={item.password}
                  tasks={item.tasks.length}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No employees available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admindashboard;
