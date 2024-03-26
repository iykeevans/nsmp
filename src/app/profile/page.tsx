import React from "react";
import TopColumn from "./TopColumn";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const Profile = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="flex flex-col items-center mb-8">
        <TopColumn />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-row w-[1262px] justify-between">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

export default Profile;
