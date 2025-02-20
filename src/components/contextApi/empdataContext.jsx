import React, { useState, createContext, useEffect } from "react";

export const empData = createContext();

function EmpdataContext({ children }) {
  const [localDatas, setLocalDatas] = useState({ empData: [], adminData: {} });

  const fetchLocalStorageData = () => {
    const empD = localStorage.getItem("employees");
    const adminD = localStorage.getItem("admin");
    const empData = empD ? JSON.parse(empD) : [];
    const adminData = adminD ? JSON.parse(adminD) : {};

    setLocalDatas({ empData, adminData });
  };

  useEffect(() => {
    fetchLocalStorageData();
  }, []);

  return (
    <empData.Provider value={{ localDatas, setLocalDatas, fetchLocalStorageData }}>
      {children}
    </empData.Provider>
  );
}

export default EmpdataContext;
