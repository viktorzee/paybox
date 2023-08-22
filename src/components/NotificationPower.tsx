import { IoNotificationsOutline } from "react-icons/io5";
import ProfileCard from "./ProfileCard";

const NotificationPower = () => {
  return (
    <div className="flex  text-lg items-center">
      <button className="relative bg-[rgba(236,241,255,1)] rounded-full p-2">
        <IoNotificationsOutline className="text-[rgba(3,34,130,1)]" />
        <span className="absolute border border-gray-100 top-[0.65rem] right-[0.8rem] inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-[rgba(255,0,0,1)] rounded-full" />
      </button>
      <ProfileCard />
    </div>
  );
};

export default NotificationPower;
