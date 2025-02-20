
import './App.css'
import Home from './pages/home'
import EmpdataContext from './components/contextApi/empdataContext'
import AuthProvider from './components/contextApi/authContext'
import UserDataProvider from './components/contextApi/userDataContext'
import { admin, employees, setlocalStorge } from './utils/localstoageData'
import { useEffect } from 'react'

function App() {
 useEffect(() => {
  setlocalStorge(employees,admin)
 }, [employees,admin])
 

  return (
    <EmpdataContext>
      <AuthProvider>
        <UserDataProvider >
          <Home />
        </UserDataProvider>
      </AuthProvider>
    </EmpdataContext>
  )
}

export default App
