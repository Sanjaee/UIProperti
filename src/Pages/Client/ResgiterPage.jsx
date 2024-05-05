import React from 'react'
import ClientNavbar from './ClientNavbar'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className=''>
        <ClientNavbar/>
    <div className=' p-4 mt-10'>
        <h1 className=' text-center font-thin text-2xl'>Selamat datang di NyariKost</h1>

    {/* kode untuk input username  */}    
    <div className=' grid space-y-3 mt-10 m-2'>
        <label className=' font-bold text-gray-800'>Username</label>
        <input className=' border-gray-400 border p-2 rounded-lg text-xl' type='text' placeholder='Hata'></input>
    </div>   
    
    {/* kode untuk input number phone */}    
    <div className=' grid space-y-3 mt-10 m-2'>
        <label className=' font-bold text-gray-800'>Number Phone</label>
        <input className=' border-gray-400 border p-2 rounded-lg text-xl' type='text' placeholder='628123456'></input>
    </div>   

    {/* kode untuk input password */}    
    <div className=' grid space-y-3 mt-10 m-2'>
        <label className=' font-bold text-gray-800'>Password</label>
        <input className=' border-gray-400 border p-2 rounded-lg text-xl' type='password' placeholder='628123456'></input>
    </div> 

    <div className=' flex space-x-2 p-2'>
       <input type='checkbox'></input>
       <h1 className=' text-sm'>Saya akan mengikuti peraturan yang berlaku</h1>
    </div>

    <button className=' w-full h-12 bg-transparent border border-gray-400 hover:bg-black hover:text-white hover:scale-105 duration-200 mt-5 rounded-lg'>Register</button>

    <h1 className=' mt-2 text-center'>Sudah punya akun? <Link to="/login"><a className=' underline text-blue-500'>Login</a></Link></h1>
        
    </div>        
    </div>
  )
}

export default RegisterPage