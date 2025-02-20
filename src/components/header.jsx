import React, { useContext, useState } from 'react'
import { authContext } from './contextApi/authContext'
import UserProfile from './userProfile'
import { UserDataContext } from './contextApi/userDataContext'

function Header() {
    const [showProfil,setShoProfile]=useState(false)
    const {auth,setAuth}=useContext(authContext)
    const {userData}=useContext(UserDataContext)
    function logOUt(){
        setAuth('login')
    }
    function handleTogle(){
        setShoProfile(!showProfil)
    }
    return (
        <div className="flex justify-between px-6 bg-gray-300 ">
            <div className={`slide-on ${showProfil? 'slide-in' : 'slid-out'} `}>
            <UserProfile className="slide-on" />
            </div>
            <button onClick={handleTogle} className='cursor-pointer border rounded-full h-[5vw] w-[5vw] bg-red-400'>{userData.name.split(' ').map((name)=>(name[0].toUpperCase())).join()}</button>
            <div><h1>Hey {userData.name}!</h1></div>
            <div><button onClick={logOUt} className="btn bg-red-600 rounded-xl p-2">LogOut</button></div>
        </div>
        )
}

export default Header