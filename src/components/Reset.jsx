import React, { useState } from 'react'
import { GlobalContext } from '../context/context';
import { useNavigate, Link } from 'react-router-dom';

const Reset = () => {
  const [email, setEmail] = useState('');
  const { resetPassword, error, loading } = GlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(email);
    const timeout = setTimeout(() => {
      navigate('/login')
    }, 3000)
    return () => clearTimeout(timeout)
  }

  if (loading) {
    return <div class="p-4 m-2 flex items-center justify-center gap-4">
      <div className='text-2xl text-red-500 text-center'>Loading...</div>
    </div>
  }

  if (error) {
    return <div class="p-4 m-2 flex items-center justify-center gap-4 flex-col">
      <div className='text-sm text-red-500 text-center font-extrabold'>{error}</div>
    </div>
  }


  return (
    <>
      <h2 className='text-center text-lg font-bold mt-8 text-slate-700'>Reset Password</h2>
      <section className='p-4 m-4 flex items-center justify-center gap-4 shadow-lg md:shadow-none shadow-slate-600'>

        <form onSubmit={handleSubmit}
          className='flex flex-col mt-8 text-center'>

          <label htmlFor="input-group-1" className="block mb-2 text-lg  text-black font-bold">Your Email</label>
          <div className="relative mb-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <input type="email" id="email" name='email'
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" />
          </div>



          <button className='py-2 font-bold  bg-slate-400 mt-4 flex items-center justify-center rounded-lg' type='submit'>Reset Password</button>


        </form>

      </section>
    </>
  )
}

export default Reset;