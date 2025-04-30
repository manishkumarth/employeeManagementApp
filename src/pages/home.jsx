import { useContext, useState } from "react"
import Login from "../components/login"
import Admindashboard from "./admindashboard"
import Empdashboard from "./empdashboard"
import { authContext } from "../components/contextApi/authContext"
import { UserDataContext } from "../components/contextApi/userDataContext"
import { empData } from "../components/contextApi/empdataContext"
import toast from "react-hot-toast"

function Home() {
    const { localDatas, setLocalDatas } = useContext(empData)
    const { auth, setAuth } = useContext(authContext)
    const { userData, setUserData } = useContext(UserDataContext)


    const checkLogin = (email, pass) => {
        let emp = localDatas.empData.find((data) => (data.email === email && data.password === pass));
        let admin = localDatas.adminData.find((data) => (data.email === email && data.password === pass));
        if (!email) {
            toast.error("please enter email")
            return
        }
        if (!pass) {
            toast.error("please enter password")
            return
        }
        if (emp) {
            setAuth("employee")
            setUserData(emp)
            console.log(emp)
            console.log("employe")
            toast.success("login success")
        } else if (admin) {
            setAuth("admin")
            setUserData(admin)
            console.log('admin')
            toast.success("login success")

        }
        else {
            console.log("email not verifyed")
            setAuth('login')
            toast.error("email and password incorrect")

        }
    }
    return (
        <>
            {auth === "login" && <Login checkLogin={checkLogin} />}
            {auth === "admin" && <Admindashboard />}
            {auth === "employee" && <Empdashboard />}

        </>
    )
}

export default Home