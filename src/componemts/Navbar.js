import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import {
  IoMdArrowDropup,
  IoMdArrowDropdown,
  IoIosLink,
  IoMdClose,
} from "react-icons/io";
import { HiUpload } from "react-icons/hi";
import { LiaDatabaseSolid } from "react-icons/lia";
import { RiCloseLargeLine } from "react-icons/ri";

import { ReactComponent as NothingAdded } from "../assets/Group4606.svg";

function Navbar() {
  const [addBtnActive, setAddBtnActive] = useState(false);
  const [courseEmpty, setcourseEmpty] = useState(true);
  const [addModule, setaddModule] = useState(false);
  const [addLink, setaddLink] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Implement your file upload logic here
      console.log("Uploading file:", selectedFile);
      // Reset the file input
      setSelectedFile(null);
      setIsUpload(false);
    }
  };

  return (
    <div className="flex flex-col">
      <nav className="h-[40px] w-[966px] border-zinc-900 top-[32px] left-[273px] relative flex justify-between">
        <div className="font-bold">Course Builder</div>
        <div
          className="flex items-center w-[80px] left-0 gap-1 bg-custom-red rounded-md text-white justify-around h-[32px] cursor-pointer"
          onClick={() => setAddBtnActive(!addBtnActive)}
        >
          <span>
            <IoAddSharp />
          </span>{" "}
          Add{" "}
          <span>
            {addBtnActive ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
        </div>
      </nav>
      <div className="w-3/4">
        {addBtnActive && (
          <div className="mt-7 ml-[83%] mr-4  bg-gray-100 rounded-md shadow-lg h-[132px] w-[292px] flex flex-col">
            <button
              className="flex items-center w-[292px] h-[40px] space-x-2 p-2 hover:bg-gray-200 rounded transition duration-200"
              onClick={() => setaddModule(!addModule)}
            >
              <LiaDatabaseSolid /> <span>Create Module</span>
            </button>
            <button
              className="flex items-center w-[292px] h-[40px] space-x-2 mt-1 p-2 hover:bg-gray-200 rounded transition duration-200"
              onClick={() => setaddLink(!addLink)}
            >
              <IoIosLink /> <span>Add Link</span>
            </button>
            <button
              className="flex items-center w-[292px] h-[40px] space-x-2 mt-1 p-2 hover:bg-gray-200 rounded transition duration-200"
              onClick={() => setIsUpload(!isUpload)}
            >
              <HiUpload /> <span>Upload</span>
            </button>
          </div>
        )}
      </div>

      {courseEmpty && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 w-[560px] h-[264px]  text-center">
          <NothingAdded className="h-[162px] w-[226px] mx-auto" />
          <h2 className="font-bold mt-4">Nothing added here yet</h2>
          <p className="text-gray-600">
            Click on the [+] Add button to add items to this course
          </p>
        </div>
      )}

      {addModule && (
        <div className="fixed top-0 w-full h-full flex items-center justify-center bg-[#8F8F8F]">
          <div className="w-[480px] h-[292px] top-[304px] left-[480px] rounded-[12px] bg-[#fff]">
            <div className="flex justify-between">
              <span className="h-[80px] pt-[24px] pr-[24px] pb-[16px] pl-[32px] font-extrabold text-xl">
                Create new module
              </span>
              <button
                className="pt-[20px] pr-[24px] pb-[16px] pl-[32px] text-xl"
                onClick={() => setaddModule(!addModule)}
              >
                {" "}
                <RiCloseLargeLine />{" "}
              </button>
            </div>
            <div className="w-full h-[116px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[16px] flex flex-col">
              <h2 className="font-bold">Module name</h2>
              <input
                className="border-[0.5px] border-gray-600 rounded-[8px] h-[50px] pl-2 pr-2 "
                placeholder="Enter module name"
                type="text"
                name="Module name"
                id=""
              />
            </div>

            <div className="h-[96px] pt-[24px] pr-[32px] pb-[24px] pl-[32px] flex justify-end gap-[16px] rounded-[12px] text-center">
              <button
                className=" border border-gray-600 text-center rounded-[8px] w-[82px] h-[48px]"
                onClick={() => setaddModule(!addModule)}
              >
                Cancel
              </button>
              <button className=" border border-gray-600 text-center rounded-[8px] w-[82px] h-[48px] bg-[#008392] text-white">
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {addLink && (
        <div className="fixed w-full h-full flex items-center justify-center bg-[#8F8F8F]">
          <div className="w-[480px] h-[408px] top-[246px] left-[480px] rounded-[12px] bg-[#fff]">
            <div className="flex justify-between">
              <span className="h-[80px] pt-[24px] pr-[24px] pb-[16px] pl-[32px] font-extrabold text-xl">
                Add new link
              </span>
              <button
                className="pt-[20px] pr-[24px] pb-[16px] pl-[32px] text-xl font-thin"
                onClick={() => setaddLink(!addLink)}
              >
                {" "}
                <RiCloseLargeLine />{" "}
              </button>
            </div>

            <div className="w-full h-[116px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[16px] flex flex-col">
              <h2 className="font-bold">URL</h2>
              <input
                className="border-[0.5px] border-gray-600 rounded-[8px] h-[50px] pl-2 pr-2 "
                placeholder="Enter URL"
                type="text"
                name="Module name"
                id=""
              />
            </div>

            <div className="w-full h-[116px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[16px] flex flex-col">
              <h2 className="font-bold">Display name</h2>
              <input
                className="border-[0.5px] border-gray-600 rounded-[8px] h-[50px] pl-2 pr-2 "
                placeholder="Enter url dispaly name"
                type="text"
                name="Module name"
                id=""
              />
            </div>

            <div className="h-[96px] pt-[24px] pr-[32px] pb-[24px] pl-[32px] flex justify-end gap-[16px] rounded-[12px] text-center">
              <button
                className=" border border-gray-600 text-center rounded-[8px] w-[82px] h-[48px]"
                onClick={() => setaddLink(!addLink)}
              >
                Cancel
              </button>
              <button className=" border border-gray-600 text-center rounded-[8px] w-[82px] h-[48px] bg-[#008392] text-white">
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {isUpload && (
        <div
          className="fixed w-full h-full flex items-center justify-center bg-[#8F8F8F]"
          onClose={() => setIsUpload(false)}
        >
          <div className="w-[480px] h-[292px] top-[304px] left-[480px] rounded-[12px] bg-[#fff]">

          <div className="flex justify-between">
              <span className="h-[80px] pt-[24px] pr-[24px] pb-[16px] pl-[32px] font-extrabold text-xl">
                Upload file
              </span>
              <button
                className="pt-[20px] pr-[24px] pb-[16px] pl-[32px] text-xl"
                onClick={() => setIsUpload(false)}
              >
                {" "}
                <RiCloseLargeLine />{" "}
              </button>
          </div>

          <div className="w-full h-[116px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[16px] flex flex-col">
              <input
                className="border border-gray-600 rounded-[8px] h-[50px] p-2"
                type="file"
                onChange={handleFileChange}
              />
          </div>


            <div className="h-[96px] pt-[24px] pr-[32px] pb-[24px] pl-[32px] flex justify-end gap-[16px] rounded-[12px] text-center">
              <button
                className="border border-gray-600 text-center rounded-[8px] w-[82px] h-[48px]"
                onClick={() => setIsUpload(false)}
              >
                Cancel
              </button>
              <button
                className="border border-gray-600 text-center rounded-[8px] w-[82px] h-[48px] bg-[#008392] text-white"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
