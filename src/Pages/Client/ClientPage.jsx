import React from 'react'
import ClientNavbar from './ClientNavbar'

const ClientPage = () => {
  return (
    <div>
       <ClientNavbar/>

    <div className=' space-y-5 border-gray-200 h-40 border-b-2'>        
        <div className=' justify-center grid items-center mt-20'>
           <img className=' w-16 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SGoG1Suia5g9_P3XbRT5j9cHn_aVbmNt_axv3CekqQ&s'></img>
        </div>
        <div className=' flex justify-center items-center'>
            <input type='file'></input>
        </div>
    </div>

    <div className=' mt-8 p-4'>
        <label className=' flex font-bold text-xl'>Info Profile <img src='info.svg' className=' ml-2'></img></label>
    
    <div className='grid mt-5'>
      <div className=' flex justify-between'>
        <h1 className=' font-bold'>Name</h1>
        <h1 className=' mr-20'>Hata</h1>
        <img src='edit.svg'></img>
      </div>  
    </div>   

    <div className='grid mt-5'>
      <div className=' flex justify-between'>
        <h1 className=' font-bold'>Number Phone</h1>
        <h1 className=' mr-20'>+6281212121212</h1>
        <img src='edit.svg'></img>
      </div>  
    </div>   

    <div className='grid mt-5'>
      <div className=' flex justify-between'>
        <h1 className=' font-bold'>Change Password</h1>
        <h1 className=' mr-20'>********</h1>
        <img src='edit.svg'></img>
      </div>  
    </div>   

    <button className=' mt-10 duration-200 hover:scale-105 bg-transparent w-full rounded-xl h-12 border border-gray-200 font-bold hover:text-white hover:bg-red-500 '>Logout</button>


    </div>
    </div>    
  )
}

export default ClientPage