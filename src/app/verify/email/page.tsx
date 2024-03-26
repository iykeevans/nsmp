import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '../Footer';

const VerifyEmail = () => {
  return (
    <>
      <Navbar />
      {/* Wrapper */}
      <div className='flex flex-col items-center justify-center h-screen'>
        {/* Top */}
        <div className='flex flex-col items-center w-[489px] mb-6 content-center'>
          <div>
            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="60" height="60" rx="12" fill="#F6F6F6"/>
              <path d="M19.4995 23L17.6713 24.2188C16.3608 25.0925 15.7055 25.5294 15.3504 26.1956C14.9952 26.8619 14.9979 27.6448 15.0031 29.2108C15.0095 31.0963 15.027 33.0174 15.0755 34.9612C15.1906 39.5731 15.2482 41.879 16.9438 43.5747C18.6394 45.2703 20.9765 45.3287 25.6506 45.4455C28.5585 45.5182 31.4406 45.5182 34.3485 45.4455C39.0227 45.3287 41.3598 45.2703 43.0554 43.5747C44.751 41.879 44.8085 39.5731 44.9236 34.9612C44.9721 33.0174 44.9896 31.0963 44.996 29.2108C45.0012 27.6448 45.0039 26.8618 44.6487 26.1956C44.2936 25.5294 43.6383 25.0925 42.3277 24.2188L40.4995 23" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M15 27.5L25.3695 33.7217C27.6256 35.0753 28.7536 35.7521 30 35.7521C31.2464 35.7521 32.3744 35.0753 34.6305 33.7217L45 27.5" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M19.5 30.5L19.5 21.5C19.5 18.6716 19.5 17.2574 20.3787 16.3787C21.2574 15.5 22.6716 15.5 25.5 15.5H34.5C37.3284 15.5 38.7426 15.5 39.6213 16.3787C40.5 17.2574 40.5 18.6716 40.5 21.5L40.5 30.5" stroke="#141B34" stroke-width="1.5"/>
              <path d="M27 27.5H33M27 21.5H33" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='font-bold text-4xl mb-6'>Verify your email</div>
          <div className='text-slate-400 text-center'>
            Hi <span className='font-bold'>@jonaskhanwald</span>, Use the link below to verify your email and start enjoying the Nigeria Solar Marketplace.
          </div>
        </div>
        {/* /Top */}
        {/* Button */}
        <div className='flex flex-col items-center mb-6'>
          <button className='bg-sky-600 p-4 rounded-lg text-white'>Verify email</button>
        </div>
        {/* /Button */}
        <div className='flex flex-col items-center'>
          <div>Got questions? Email us at</div> 
          <div><a className="text-blue-700 underline" href="#">feedback@nigeriasolarmarketplace.com</a></div>
        </div>
      </div>
      {/* /Wrapper */}
      <Footer />
    </>
  )
}

export default VerifyEmail
