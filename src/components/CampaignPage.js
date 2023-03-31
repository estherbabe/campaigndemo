import React from "react";
import Photo from "/src/campaignphoto.jpg";

export default function CampaignPage() {
  return (
    <div>
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img
            src={Photo}
            alt="campaign"
            className="w-full h-[410px] object-cover rounded-xl"
          />
          <div className="relative w-full h-1.5 bg-[#3a3a43] mt-2"></div>
        </div>
      </div>
    </div>
  );
}
