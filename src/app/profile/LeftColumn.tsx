import React from 'react'

const LeftColumn = () => {
  return (
    <div className='w-[731px] h-[692px] rounded-xl px-4 py-6 bg-white'>
      <h4 className='font-bold mb-3'>Short Bio</h4>
      <p className='mb-8'>Lorem ipsum dolor sit amet consectetur. A eu non vitae commodo mattis lorem. Aliquam est pellentesque non arcu sit sit in. Lectus arcu est sed cras vel nulla. Condimentum adipiscing felis nec nunc et nulla sit.</p>

      <h4 className='font-bold mb-1'>Types of Services Offered</h4>
      <div>
        <button>Feasibility Studies</button>
      </div>
      <div>
        <button>Installation</button>
      </div>
      <div className='mb-8'>
        <button>Engineering</button>
      </div>

      <h4 className='font-bold mb-1'>Target Market Segments</h4>
      <div>
        <button>Residential</button>
      </div>
      <div className='mb-8'>
        <button>Utility-Scale Projects</button>
      </div>

      <h4 className='font-bold mb-1'>Geographic Coverage</h4>
      <div>
        <button>South-South (SS)</button>
      </div>
      <div>
        <button>South-West (SW)</button>
      </div>
      <div>
        <button>North Central (NC)</button>
      </div>
      <div>
        <button>South East (SE)</button>
      </div>

    </div>
  )
};

export default LeftColumn
