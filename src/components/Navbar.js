import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#212121] opacity-95 sticky px-14 h-14 ">
      <div className="flex gap-8 items-center text-2xl ">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaYoutube className="text-2xl text-red-500" />
          <span className="text-2xl ">Youtube</span>
        </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <form>
            <div className="flex bg-[#333] items-center h-10 px-4 pr-2">
              <div className="flex gap-5 items-center pr-5">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#333] text-white px-2 py-1 rounded-3xl"
                />
              </div>
              <button className="h-10 w-16 flex items-center justify-center bg-[#333] rounded-3xl">
                <CiSearch className="text-xl" />
              </button>
            </div>
          </form>

          <div className="text-xl p-3 bg-[#333] rounded-full ">
            <FaMicrophone />
          </div>
          </div>
          <div className="flex gap-8 items-center text-xl">
            <RiVideoAddLine />

            <div className="relative">
              <CiBellOn />
              <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
                9+
              </span>
            </div>
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1733579885~exp=1733583485~hmac=dc5b3b8ae4f4b4e7e8b39c0890af3f8520f7ba2a11e239cb0b927900863dfb4b&w=740" alt="profile logo " className="w-9 h-9 rounded-full" />
          </div>
        </div>
      
    
  );
};

export default Navbar;
