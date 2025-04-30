import React, { useState, useContext } from "react";
import { empData } from "./contextApi/empdataContext";

function AddEmploye() {
  const { localDatas, setLocalDatas, fetchLocalStorageData } = useContext(empData);

  const [newU, setNewU] = useState({
    id: "emp0" + (localDatas.empData.length + 1),
    name: "",
    email: "",
    password: "",
    tasks: [],
  });

  function changeNewuser(e) {
    const { name, value } = e.target;
    setNewU((prevU) => ({
      ...prevU,
      [name]: value,
    }));
  }

  function addEmpuser() {
    if (!newU.name || !newU.email || !newU.password) {
      alert("Please enter all required details!");
      return;
    }

    const updatedEmployees = [...localDatas.empData, { ...newU, id: "emp0" + (localDatas.empData.length + 1) }];

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setLocalDatas((prev) => ({
      ...prev,
      empData: updatedEmployees,
    }));

    fetchLocalStorageData();

    setNewU({
      id: "emp0" + (updatedEmployees.length + 1),
      name: "",
      email: "",
      password: "",
      tasks: [],
    });
  }

  return (
    <div className="shadow-xl bg-gradient-to-r from-red-300 to-red-400 p-6 rounded-xl max-w-5xl mx-auto mt-6">
      <h2 className="text-center text-xl font-semibold mb-4 text-white">➕ Add New Employee</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Name Field */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-white">Employee Name</label>
          <input
            type="text"
            name="name"
            className="rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={newU.name}
            onChange={changeNewuser}
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-white">Employee Email</label>
          <input
            type="email"
            name="email"
            className="rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={newU.email}
            onChange={changeNewuser}
            placeholder="john@example.com"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-white">Employee Password</label>
          <input
            type="password"
            name="password"
            className="rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={newU.password}
            onChange={changeNewuser}
            placeholder="********"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            onClick={addEmpuser}
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 transition"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmploye;
