import Image from "next/image";
import React from "react";
import {
  HomeIcon,
  ChevronDownIcon,
  Bars3Icon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
  BellIcon,
  ChatBubbleBottomCenterIcon,
  GlobeAltIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          src="https://links.papareact.com/fqy"
          fill
          alt="logo"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Left Side */}
      <div className="flex items-center mx-7 xl:min-w-[300px] ">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden xl:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search Bar */}
      <form className="flex flex-1 items-center space-x-2 rounded-lg border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      {/* Right Icons */}
      <div className="flex text-gray-500 space-x-2 mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-200" />
        <ChatBubbleBottomCenterIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerWaveIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/* Sign In / Out Button */}
      <div className="hidden lg:flex items-center space-x-2 cursor-pointer border border-gray-200 p-2">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image
            src="https://links.papareact.com/23l"
            fill
            alt=""
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="text-gray-400">Sign In</p>
      </div>
    </div>
  );
}

export default Header;
