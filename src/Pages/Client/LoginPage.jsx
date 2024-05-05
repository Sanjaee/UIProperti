import { Link } from "react-router-dom"
import ClientNavbar from "./ClientNavbar"

const LoginPage = () => {
  return (
    <div className=''>
    <ClientNavbar/>
<div className=' p-4 mt-10'>
    <h1 className=' text-center font-thin text-2xl'>Selamat datang di NyariKost</h1>

{/* kode untuk input number phone */}    
<div className=' grid space-y-3 mt-10 m-2'>
    <label className=' font-bold text-gray-800'>Number Phone</label>
    <input className=' border-gray-400 border p-2 rounded-lg text-xl' type='text' placeholder='628123456'></input>
</div>   

{/* kode untuk input password */}    
<div className=' grid space-y-3 mt-10 m-2'>
    <label className=' font-bold text-gray-800'>Password</label>
    <input className=' border-gray-400 border p-2 rounded-lg text-xl' type='password' placeholder='******'></input>
</div> 

<button className=' w-full h-12 bg-transparent border border-gray-400 hover:bg-black hover:text-white hover:scale-105 duration-200 mt-5 rounded-lg'>Login</button>

<h1 className=' mt-2 text-center'>Belum punya akun?<Link to="/register"> <a  className=' underline text-blue-500'>Register</a></Link></h1>
    
</div>        
</div>
  )
}

export default LoginPage