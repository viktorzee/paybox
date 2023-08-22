import React from "react";
import profile from "../assets/profile.png";


const ProfileCard: React.FC = () => {
    return (
      <div className="p-4 flex justify-center items-center">
        <div className="rounded-full overflow-hidden mr-3">
          <img
            src={profile}
            alt="Profile"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold">Dexter Olaniyi</p>
          <div className="flex items-center justify-between">
            <p className="text-[rgba(129,129,129,1)] text-xs">Dexterola@gmail.com</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;