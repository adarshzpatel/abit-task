import React from "react";
import { BiPlus } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

type Props = {
  onClick: () => void;
};

const AddNewVideoCard = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="h-80 w-64 relative text-gray-400 hover:ring ring-gray-200  flex flex-col justify-center items-center bg-gray-100 hover:scale-105  duration-300 ease-out rounded-2xl overflow-hidden"
    >
      <BiPlus className="text-5xl" />
      <span className="absolute bottom-4 p-4 text-sm">You {"haven’t"} uploaded any <br /> videos with aBit yet. Add now!</span>
    </button>
  );
};

export default AddNewVideoCard;
