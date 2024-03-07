import React, { useState } from 'react';
import { Link } from "react-router-dom";
import GenderCheckbox from './GenderCheckbox';
import useSignup from "../../hooks/useSignUp";

export default function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0'>
        <h1 className='text-3xl mb-2 font-extrabold text-center text-violet-800' style={{ textShadow: '0 0 0.5em white, 0 0 0.5em white', letterSpacing: '3px' }}>
          ChatVibe
        </h1>


        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-blue-700 font-bold'
                style={{ textShadow: '0 0 0.5em white, 0 0 0.5em white', letterSpacing: '1px' }}>
                Full Name
              </span>
            </label>
            <input
              type='text'
              className='w-full input input-bordered  h-10'
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
          </div>

          <div>
            <label className='label p-2 '>
              <span
                className='text-base label-text text-blue-700 font-bold'
                style={{ textShadow: '0 0 0.5em white, 0 0 0.5em white', letterSpacing: '1px' }}>
                Username
              </span>
            </label>
            <input
              type='text'
              className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
          </div>

          <div>
            <label className='label p-2'>
              <span
                className='text-base label-text text-blue-700 font-bold'
                style={{ textShadow: '0 0 0.5em white, 0 0 0.5em white', letterSpacing: '1px' }}>
                Password
              </span>
            </label>
            <input
              type='password'
              className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span
                className='text-base label-text text-blue-700 font-bold '
                style={{ textShadow: '0 0 0.5em white, 0 0 0.5em white', letterSpacing: '1px' }}>
                Confirm Password
              </span>
            </label>
            <input
              type='password'
              className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link className=' px-2 font-semibold text-md hover:underline text-slate-500 hover:text-slate-600 mt-2 inline-block' style={{ textShadow: '0 0 0.5em white, 0 0 0.5em white', letterSpacing: '1px' }} to='/login'>
            Already have an account?
          </Link>

          <div>
            <button
              className='rounded-lg py-[6px] bg-green-700 hover:bg-green-600 w-full font-bold mt-4 text-lg text-white'
              disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
