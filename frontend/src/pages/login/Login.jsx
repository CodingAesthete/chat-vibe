import React from 'react'

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0'>
        <h1 className='text-3xl mb-2 font-extrabold text-center text-violet-800' style={{ textShadow: '0 0 0.5em white, 0 0 0.5em white', letterSpacing: '3px' }}>
          ChatVibe
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text  text-blue-700 font-bold' style={{ textShadow: '0 0 0.5em white, 0 0 0.5em white', letterSpacing: '1px' }}>Username</span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text  text-blue-700 font-bold' style={{ textShadow: '0 0 0.5em white, 0 0 0.5em white', letterSpacing: '1px' }}>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
            />
          </div>
          <a href='#' className='px-2 text-slate-500 hover:text-slate-400 font-bold  hover:underline mt-2 inline-block' style={{ textShadow: '0 0 0.5em white, 0 0 0.5em white', letterSpacing: '1px' }}>
            {"Don't"} have an account?
          </a>

          <div>
            <button className='rounded-lg py-[6px] bg-green-700 hover:bg-green-600 w-full font-bold mt-4 text-lg text-white'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
