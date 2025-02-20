import { useContext, useState } from "react"
import Login from "../components/login"
import Admindashboard from "./admindashboard"
import Empdashboard from "./empdashboard"
import { authContext } from "../components/contextApi/authContext"
import { UserDataContext } from "../components/contextApi/userDataContext"
import { empData } from "../components/contextApi/empdataContext"

function Home() {
    const { localDatas, setLocalDatas } = useContext(empData)
    const {auth,setAuth}=useContext(authContext)
    const {userData,setUserData}=useContext(UserDataContext)
  

    const checkLogin = (email, pass) => {
        let emp=localDatas.empData.find((data) => (data.email === email && data.password === pass));
        let admin=localDatas.adminData.find((data) => (data.email === email && data.password === pass));

        if (emp) {
            setAuth("employee")
            setUserData(emp)
            console.log(emp)
            console.log("employe")
        } else if (admin) {
            setAuth("admin")
            setUserData(admin)
            console.log('admin')
        }
        else {
            console.log("email not verifyed")
            setAuth('login')
        }
    }
    return (
        <>
            {auth === "login" && <Login checkLogin={checkLogin} /> }
            {auth === "admin" && <Admindashboard />}
            {auth === "employee" &&<Empdashboard /> }

        </>
    )
}

export default Home