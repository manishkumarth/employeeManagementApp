import React, { useContext } from 'react';
import { UserDataContext } from './contextApi/userDataContext';

function UserProfile() {
  const { userData } = useContext(UserDataContext);

  return (
    <div className="max-w-md mx-auto bg-blue-200 rounded-2xl shadow-lg p-6 mt-6 hover:bg-blue-300 transition duration-300">
      <div key={userData.id} className="space-y-3">
        <h2 className="text-xl font-bold text-gray-800">👤 {userData.name}</h2>
        <h2 className="text-sm font-medium text-gray-700">
           {userData.email}
        </h2>
        <h2 className="text-sm font-medium text-gray-700">
           {userData.password}
        </h2>
      </div>
    </div>
  );
}

export default UserProfile;
