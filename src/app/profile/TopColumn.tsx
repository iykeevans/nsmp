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
            <button className="px-4 py-1 rounded-lg border-solid border-1 border-[#E4E9EE] outline outline-1 mr-3">
              Contact
            </button>
            <button className="px-4 py-1 bg-[#3E90F0] rounded-lg text-[#FEFEFE]">
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
