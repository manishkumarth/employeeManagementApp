import { useContext } from "react"
import Header from "../components/header"
import Tasklist from "../components/tasklist"
import Tasknumber from "../components/tasknumber"
import { UserDataContext } from "../components/contextApi/userDataContext"
import { empData } from "../components/contextApi/empdataContext"

function Empdashboard() {
    const { localDatas, setLocaldatas } = useContext(empData)
    const {userData,setUserData}=useContext(UserDataContext)
    return (
        <>
            <Header/>
            <div className="flex flex-wrap justify-between gap-4 px-6 mt-4">
                <Tasknumber
                    bgColor="bg-red-600"
                    taskCount={20}
                />

                <Tasknumber
                    bgColor="bg-red-400"
                    taskCount={30}
                />

                <Tasknumber
                    bgColor="bg-blue-400"
                    taskCount={0}
                />

                <Tasknumber
                    bgColor="bg-gray-200"
                    taskCount={3}
                />

            </div>

            <div id="task-list" className="mt-10 overflow-x-auto w-full flex justify-start gap-x-5 px-4 bg-gray-400 mx-auto">
               
               {
                userData.tasks.map((item)=>{
                    return <Tasklist 
                    key={item.taskId}
                    assginDate={item.assignedDate}
                     deadlinDate={item.deadline}
                     status={item.status}
                     taskTitle={item.title}
                     taskDesc={item.description}
                     bgColor="bg-blue-100"
                     />
                }
                    
                )
               }
            </div>
        </>
    )
}
export default Empdashboard