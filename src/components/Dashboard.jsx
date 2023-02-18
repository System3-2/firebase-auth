import React from 'react'
import { GlobalContext } from '../context/context';
const Dashboard = () => {
  const { user, loading, logout, error } = GlobalContext();

  if (loading) {
    return <div class="p-4 m-2 flex items-center justify-center gap-4">
      <div className='text-2xl text-red-500 text-center'>Loading...</div>
    </div>
  }

  if (error) {
    return <div class="p-4 m-2 flex items-center justify-center gap-4 flex-col">
      <div className='text-sm font-extrabold  text-red-500 text-center'>{error}</div>
    </div>
  }


  return (
    <section className='p-4 m-2 flex items-center justify-center gap-4'>
      <div className='flex p-4 items-center justify-center gap-2 flex-col font-serif border-2 border-gray-200 mt-4'>
        { user.photoURL ? <img src={user.photoURL} alt="avater" className='rounded-full w-24 border-4 border-slate-500' /> : null }
        <h1 className='text-xl text-red-600 font-extrabold'>Dashboard </h1>
        <h2 className='text-lg font-bold '>Name : {user.displayName}</h2>
        <h2 className='text-lg font-bold '>Email : {user.email}</h2>
        <button
          onClick={logout}
          className="px-4 py-2 font-bold rounded-lg bg-slate-600 text-white"
        >Log out
        </button>
      </div>
    </section>
  )
}

export default Dashboard;