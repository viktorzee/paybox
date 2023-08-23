/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import { FaAward, FaCreditCard } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiHome5Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { ImFeed } from "react-icons/im";
import { BsFillWalletFill } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { HiMiniCube } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { useSidebar } from "../../context/SidebarContext";
import SidebarButton from "./SidebarButton";


const AdminSidebarContent = () => {
  const [isOpen, setOpen] = useSidebar();

  const closeSidebar = () => {
    setOpen(false);
  };


  return (
    <div
      className={`min-h-screen h-full bg-[rgba(7,17,45,1)] text-white w-[16.4rem] absolute lg:static ${
        isOpen ? "left-0" : "-left-28"
      } py-4 flex flex-col  transition-all duration-300 ease-in-out p-8`}
    >
      <Link to="/">
        <h3 className='font-bold text-3xl font-clashDisplay'>Paybox</h3>
        <p className='text-xs font-normal font-clashDispay'>by LibertyPay</p>
      </Link>
      <IoClose className="block md:hidden absolute right-[1rem] text-2xl" onClick={closeSidebar} />
      {/* First section */}
      <SidebarButton icon={<RiHome5Line />} title="Home" path="/home" />
      <SidebarButton icon={<RxDashboard />} title="Analytics Dashboard" path="/" />

      {/* Second section */}
      <div className="w-full mt-4 border-t border-white border-dashed border-opacity-20 pt-4">
        <SidebarButton icon={<BsFillWalletFill />} title="Personal" path="#" showChevron />
        <SidebarButton icon={<CiShop />} title="Sale Hub" path="#" showChevron />
        <SidebarButton icon={<HiMiniCube />} title="Talent Management" path="#" showChevron />
        <SidebarButton icon={<FaCreditCard />} title="Spend Management" path="#" showChevron />
        <SidebarButton icon={<FaCreditCard />} title="Cards" path="#" />
      </div>

    

      {/* Third section */}
      <div className="w-full mt-4 border-t border-white border-dashed border-opacity-20 pt-4">
        <SidebarButton icon={<FaAward />} title="Leaderboard" path="#" />
        <SidebarButton icon={<CgProfile />} title="Profile & Settings" path="#" />
        <SidebarButton icon={<ImFeed />} title="Bank performance" path="#" showChevron />
      </div>
    </div>
  );
};

export default AdminSidebarContent;
