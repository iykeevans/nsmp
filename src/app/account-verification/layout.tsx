import React from "react";

import Logo from "@/components/logo";

const AccountVerificationLayout = () => {
  return (
    <div>
      <nav className="h-[70px] border-b border-[#E4E9EE] flex items-center pl-6">
        <Logo />
      </nav>
      <div className="h-[100px] flex items-center">
        <div>Account Verification</div>
      </div>
      <div>
        <section className="flex">
          <div className="w-[33px] bg-[#D9D9D970] rounded-[109px]"></div>

          <div>
            <div>Business overview</div>
            <div>Business representative</div>
            <div>Business details</div>
            <div>Service areas</div>
            <div>Certifications and Qualifications</div>
            <div>Profile setup</div>
            <div>Social links</div>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
};

export default AccountVerificationLayout;
