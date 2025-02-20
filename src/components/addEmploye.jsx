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

    // Update local storage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // Update context state to trigger re-render
    setLocalDatas((prev) => ({
      ...prev,
      empData: updatedEmployees,
    }));

    // Fetch updated data to ensure synchronization
    fetchLocalStorageData();

    // Reset input fields
    setNewU({
      id: "emp0" + (updatedEmployees.length + 1),
      name: "",
      email: "",
      password: "",
      tasks: [],
    });
  }

  return (
    <div className="shadow-xl bg-red-300 p-4">
      <div className="flex justify-center gap-4">
        <div>
          <label>Employee Name</label>
          <input type="text" className="border rounded p-1" name="name" value={newU.name} onChange={changeNewuser} />
        </div>

        <div>
          <label>Employee Email</label>
          <input type="email" className="border rounded p-1" name="email" value={newU.email} onChange={changeNewuser} />
        </div>

        <div>
          <label>Employee Password</label>
          <input type="password" className="border rounded p-1" name="password" value={newU.password} onChange={changeNewuser} />
        </div>

        <div>
          <button onClick={addEmpuser} className="bg-blue-500 text-white border rounded p-2 hover:bg-blue-700">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmploye;
