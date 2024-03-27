import React from 'react'

const TopColumn = () => {
  return (
    <div className="w-[1262px] h-[448px] rounded-3xl">
      {/* pic */}
      <div className="h-[278px] rounded-t-3xl">
        <img
          src="/img/acb3fad64920a764f9b840590415dd81.png"
          alt="background pic"
        />
      </div>
      {/* pic end */}
      {/* description */}
      <div className="h-[170px] rounded-b-3xl bg-white pt-12 pr-6 pl-20">
        <div className="mb-4">
          <div className="font-bold">Tantrino Sasongko</div>
          <div>@tantrionosasangko</div>
        </div>
        <div className="flex flex-row justify-between">
          <button className="px-4 py-1 bg-[#EDF2FE] text-[#4976FA] rounded-lg">
            Installer
          </button>
          <div>
            <button className="px-4 py-1 rounded-lg border border-[#E4E9EE] mr-3">
              <svg className="inline-block mb-1 mr-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_312_18855)">
                <path d="M10.417 18.3327H5.49272C4.2049 18.3327 3.18058 17.706 2.26088 16.8298C0.378129 15.0361 3.46933 13.6027 4.6483 12.9007C6.39897 11.8583 8.44769 11.4759 10.417 11.7537C11.1316 11.8545 11.8275 12.0422 12.5003 12.3168" stroke="#398BEC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.75 5.41602C13.75 7.48708 12.0711 9.16602 10 9.16602C7.92893 9.16602 6.25 7.48708 6.25 5.41602C6.25 3.34495 7.92893 1.66602 10 1.66602C12.0711 1.66602 13.75 3.34495 13.75 5.41602Z" stroke="#398BEC" stroke-width="1.5"/>
                <path d="M15.4167 18.3333L15.4167 12.5M12.5 15.4167H18.3333" stroke="#398BEC" stroke-width="1.5" stroke-linecap="round"/>
                </g>
                <defs>
                <clipPath id="clip0_312_18855">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              Contact
            </button>
            <button className="px-4 py-1 bg-[#3E90F0] rounded-lg text-[#FEFEFE]">
            <svg  className="inline-block mb-1 mr-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.417 1.67581C10.279 1.66931 10.14 1.66602 10.0003 1.66602C5.39847 1.66602 1.66699 5.23566 1.66699 9.63828C1.66699 11.7536 2.5281 13.6756 3.93273 15.1019C4.24199 15.416 4.44847 15.845 4.36514 16.2867C4.22761 17.0087 3.91594 17.6822 3.45958 18.2435C4.66029 18.4668 5.90877 18.2657 6.97948 17.6963C7.35797 17.4951 7.54722 17.3944 7.68077 17.374C7.81431 17.3536 8.0056 17.3895 8.38817 17.4614C8.91969 17.5612 9.45923 17.6112 10.0003 17.6105C14.6022 17.6105 18.3337 14.0409 18.3337 9.63828C18.3337 9.47974 18.3288 9.32227 18.3193 9.16602" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.5 4.58268H18.3333M15.4167 1.66602L15.4167 7.49935" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.99659 10H10.0041M13.3262 10H13.3337M6.66699 10H6.67447" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

              Facilitate
            </button>
          </div>
        </div>
      </div>
      {/* description end */}
    </div>
  )
}

export default TopColumn
