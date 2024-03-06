import React from 'react'

export default function GenderCheckbox() {
  return (
    <div className='flex px-1 gap-2'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
          <span className='label-text text-[15px] font-bold text-blue-700' style={{ textShadow: '0 0 0.5em white, 0 0 0.5em white', letterSpacing: '1px' }}>Male</span>
          <input type='checkbox' className='checkbox border-slate-900' />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
          <span className='label-text text-[15px] font-bold text-blue-700' style={{ textShadow: '0 0 0.1em white, 0 0 0.1em white', letterSpacing: '1px' }}>Female</span>
          <input type='checkbox' className='checkbox border-slate-900' />
        </label>
      </div>
    </div>
  );
}
