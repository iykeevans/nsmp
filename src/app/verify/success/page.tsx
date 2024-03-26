import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '../Footer';

const Success = () => {
  return (
    <>
      <Navbar />
        {/* main */}
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className='mb-3'>
            <svg width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5.5" width="56" height="56" rx="28" fill="#D1FADF"/>
              <rect x="5" y="5.5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"/>
              <path d="M27.7507 33.4999L31.2507 36.9999L38.2507 29.9999M44.6673 33.4999C44.6673 39.9432 39.444 45.1666 33.0007 45.1666C26.5573 45.1666 21.334 39.9432 21.334 33.4999C21.334 27.0566 26.5573 21.8333 33.0007 21.8333C39.444 21.8333 44.6673 27.0566 44.6673 33.4999Z" stroke="#039855" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='font-bold text-4xl mb-2'>
            Awesome!
          </div>
          <div className='text-center text-slate-400 mb-6'>
            You’re ready to proceed to the Nigeria Solar Marketplace
          </div>
          <div className='mb-6'>
            <button className="bg-blue-500 rounded-lg py-2 px-4 text-white">Proceed</button>
          </div>
          <div className='flex flex-col items-center'>
            <div>Got questions? Email us at</div> 
            <div><a href="#" className="text-blue-700 underline">feedback@nigeriasolarmarketplace.com</a></div>
          </div>
        </div>
        {/* /main */}
      <Footer />
    </>
  )
};

export default Success
