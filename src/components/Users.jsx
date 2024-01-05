import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <>
    <section className=' flex '>
    <article className='w-[80%] h-[80%] rounded-md'>
    <h1 className='font-bold text-6xl text-blue-950'>User Details(Dynamic Routing)</h1>
    <div className='flex flex-1/2 flex-col ml-4 mt-8 '>
        <Link className='p-3 w-48 bg-red-100 hover:bg-red-200 text-2xl' to="/users/user1">User1</Link>
        <Link className='p-3 w-48 bg-red-100 text-2xl hover:bg-red-200' to="/users/user2">User2</Link>
        <Link className='p-3 w-48 bg-red-100 text-2xl hover:bg-red-200' to="/users/user3">User3</Link>
    </div>
    </article> 
</section>
<div>
<hr/>
    <Outlet/>
</div>
</>
  )
}

export default Users