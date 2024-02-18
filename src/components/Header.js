import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons library

export const Header = () => {
  const [value, setValue] = useState("");
  const handleClickSearch = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="pl-7 pr-5 w-full h-16 bg-blue-500 flex items-center text-white text-3xl font-bold relative">
      <div className="mr-4">Teams</div>
      <div className="relative ml-auto">
        <input
          type="text"
          placeholder="Search..."
          className="pl-8 pr-4 py-1 rounded-full outline-none text-sm text-black"
          value={value}
          onChange={handleClickSearch}
        />
        <FaSearch
          className="absolute left-2 top-2/3 transform -translate-y-1/2 text-gray-900 text-lg"
          color="#CBD5E1"
        />
      </div>
    </div>
  );
};
