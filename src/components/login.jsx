import { useState } from "react"

function Login({ checkLogin }) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, pass)
        checkLogin(email, pass)
        setEmail('')
        setPass('')

    }
    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                {/* <h1 className="text-center">Login</h1> */}

                <form className="container flex flex-col mx-auto gap-4 bg-lighblue-400 md:w-100 w-full sm:w-80 h-auto p-5 shadow-xl" onSubmit={handleLogin}>
                    {/* input field for email  */}
                    <div>
                        <label htmlFor="">Enter your email</label>
                        <input
                            className="border w-full rounded-xl p-2"
                            type="text"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                    </div>
                    {/* input field for password  */}
                    <div>
                        <label htmlFor="">Enter your password</label>
                        <input
                            className="border rounded-xl  w-full p-2"
                            type="text"
                            placeholder="enter password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="bg-blue-500 w-full rounded-md sm:text-sm lg:text-lg md:text-md p-2"
                            type="submit" value="Login"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login