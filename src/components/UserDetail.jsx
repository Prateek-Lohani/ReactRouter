import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const UserDetail = () => {

const data=useParams();
const navigate=useNavigate();


const backHandler=()=>{
    navigate('/users')
    // navigate(-1);
}

    return (
    <div className='text-4xl mt-5 font-semibold text-blue-900 ml-5'>
        <h1>
            Hi, {data.name}
        </h1>
        <button onClick={backHandler} className='px-3 py-1 bg-slate-900 rounded-full text-lg text-white'>Back</button>
    </div>
  )
}

export default UserDetail