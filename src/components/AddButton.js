import React from "react";
import { FaPlus } from "react-icons/fa";

export const AddButton = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full cursor-pointer shadow-lg hover:bg-blue-600">
        <div className="w-8 h-8 flex items-center justify-center">
          <FaPlus className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
};
