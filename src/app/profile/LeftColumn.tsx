import React from 'react'

const LeftColumn = () => {
  return (
    <div className='w-[731px] h-[692px] rounded-xl px-4 py-6 bg-white'>
      <h4 className='font-bold mb-3'>Short Bio</h4>
      <p className='mb-8'>Lorem ipsum dolor sit amet consectetur. A eu non vitae commodo mattis lorem. Aliquam est pellentesque non arcu sit sit in. Lectus arcu est sed cras vel nulla. Condimentum adipiscing felis nec nunc et nulla sit.</p>

      <h4 className='font-bold mb-1'>Types of Services Offered</h4>
      <div className='mb-1'>
        <button className='bg-[#F4F4F4] py-1.5 px-2.5 rounded-lg'>Feasibility Studies</button>
      </div>
      <div className='mb-1'>
        <button className='bg-[#F4F4F4] py-1.5 px-2.5 rounded-lg'>Installation</button>
      </div>
      <div className='mb-8'>
        <button className='bg-[#F4F4F4] py-1.5 px-2.5 rounded-lg'>Engineering</button>
      </div>

      <h4 className='font-bold mb-1'>Target Market Segments</h4>
      <div className='mb-1'>
        <button className='bg-[#F4F4F4] py-1.5 px-2.5 rounded-lg'>Residential</button>
      </div>
      <div className='mb-8'>
        <button className='bg-[#F4F4F4] py-1.5 px-2.5 rounded-lg'>Utility-Scale Projects</button>
      </div>

      <h4 className='font-bold mb-1'>Geographic Coverage</h4>
      <div className='mb-1'>
        <button className='bg-[#F4F4F4] py-1.5 px-2.5 rounded-lg'>South-South (SS)</button>
      </div>
      <div className='mb-1'>
        <button className='bg-[#F4F4F4] py-1.5 px-2.5 rounded-lg'>South-West (SW)</button>
      </div>
      <div className='mb-1'>
        <button className='bg-[#F4F4F4] py-1.5 px-2.5 rounded-lg'>North Central (NC)</button>
      </div>
      <div>
        <button className='bg-[#F4F4F4] py-1.5 px-2.5 rounded-lg'>South East (SE)</button>
      </div>

    </div>
  )
};

export default LeftColumn
