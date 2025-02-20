import React, { useContext } from 'react'
import { UserDataContext } from './contextApi/userDataContext'

function UserProfile() {
    const { userData, setUserData } = useContext(UserDataContext)
    return (
        <div className='rounded p-4 bg-blue-200'>
            <div key={userData.id}>
                <h2>{userData.name}</h2>
                <h2>{userData.email}</h2>
                <h2>{userData.password}</h2>
            </div>

        </div>
    )
}

export default UserProfile