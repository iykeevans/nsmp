import React from 'react';

const RightColumn = () => {
  return (
    <div className='w-[499px] h-[1012px] rounded-xl px-4 py-6 bg-white'>
      <div className='rounded-lg border-solid border-1 border-black'>
        <h4 className='font-bold'>Basic Info</h4>
        <div>Solar panel Installer</div>
        <div>Tyrasu wuse II, abuja</div>
        <div>www.forbes.org</div>
        <div>11 December 1997</div>
        <div>
          <button>Instagram</button>
          <button>Twitter</button>
        </div>
      </div>
      <h4 className='font-bold'>Project Reference</h4>
      <div>
        <h4 className='font-bold'>Project name</h4>
        <p>Indica Solar Development</p>

        <h4 className='font-bold'>Location</h4>
        <p>12 Wuse road, abuja</p>

        <h4 className='font-bold'>Year commissioned</h4>
        <p>19 November 2024</p>

        <h4 className='font-bold'>Project size (kW or MW)</h4>
        <p>12000 sqmeters</p>

        <h4 className='font-bold'>Client/Owner</h4>
        <p>Royal mines property ltd.</p>

        <h4 className='font-bold'>Description of scope of work</h4>
        <p>Lorem ipsum dolor sit amet consectetur. A eu non vitae commodo mattis lorem. Aliquam est pellentesque non arcu sit sit in. Lectus arcu est sed cras vel nulla. Condimentum adipiscing felis nec nunc et nulla sit.</p>
      </div>

      <h4 className='font-bold'>Payment Offerings</h4>
      <div>
        <button>Energy As a Service</button>
      </div>
      <div>
        <button>Outright Sales</button>
      </div>
    </div>
  )
};

export default RightColumn
