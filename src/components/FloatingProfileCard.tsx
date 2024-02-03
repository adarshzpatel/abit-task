import React from "react";

type Props = {
  imageSrc: string;
  name: string;
  username: string;
  bio: string;
  isCreator: boolean;
};

const FloatingProfileCard = ({
  imageSrc,
  name,
  username,
  bio,
  isCreator,
}: Props) => {
  return (
    <div className="absolute flex mr-16  left-16 overflow-hidden -bottom-16 flex-col md:flex-row md:h-56 rounded-xl shadow-xl border border-gray-400  bg-gray-100">
      <div className='grid place-items-center pt-6 md:pt-0'>

      <img
        src={imageSrc}
        alt="profile-pic"
        className="object-center aspect-square w-56 max-md:rounded-xl max-md:border max-md:border-gray-400"
        />
        </div>
      <div className="p-6 md:border-l md:max-w-md border-gray-800 flex gap-3 flex-col justify-between">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h6 className="font-bold text-3xl">{name}</h6>
          <span className="text-gray-500">{username}</span>
        </div>
        <div>
          <h6 className="font-semibold text-gray-600 mb-1">Bio</h6>
          <p className="text-gray-600">{bio}</p>
        </div>
        <div className="rounded-md overflow-hidden bg-gray-600 border border-gray-800 flex">
          <div className="border-gray-800 font-serif border rounded-md p-2 text-center w-1/2 bg-gray-100">Creator</div>
        </div>
      </div>
    </div>
  );
};

export default FloatingProfileCard;
