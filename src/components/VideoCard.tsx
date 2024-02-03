import React from "react";

export type VideoProps = {
  id: string;
  title: string;
  shares: string;
  offered: string;
  raised: string;
  thumbnailSrc: string;
};

const VideoCard = ({
  title,
  shares,
  offered,
  raised,
  thumbnailSrc,
}: VideoProps) => {
  return (
    <div className="h-80 w-64 relative bg-gray-200 hover:scale-105 hover:brightness-125 shadow-lg hover:shadow-xl duration-300 ease-out rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-t from-black/50 to-transparent h-[25%] absolute bottom-0 left-0 w-full z-1"></div>
      <div className="bg-gradient-to-b from-black/50 to-transparent h-[25%] absolute top-0 left-0 w-full z-1"></div>
      <img src={thumbnailSrc} alt="thumbnail" className="w-full h-full" />
      <div className=" absolute bottom-0 w-full   p-4">
        <div className="text-sm text-center shadow-xl text-white backdrop-brightness-75 bg-gray-500/50 backdrop-blur-lg p-2 rounded-xl flex items-center justify-around gap-2">
          <div >
            <div >Shares</div>
            <div className="font-medium text-sm">{shares}</div>
          </div>
          <div>
            <div >Offered</div>
            <div className="font-medium text-sm ">{offered}</div>
          </div>
          <div>
            <div >Raised</div>
            <div className="font-medium text-sm">{raised}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
