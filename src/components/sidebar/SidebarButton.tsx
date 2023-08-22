import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import { FaChevronRight } from 'react-icons/fa';

type Props = {
  icon: React.ReactElement;
  title: string;
  path: string;
  showChevron?: boolean;
};

const SidebarButton = ({ icon, title, path, showChevron }: Props) => {
  const [isOpen, setOpen] = useSidebar();

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
      isActive ? `${path === "#" ? "" : "mr-5 bg-white p-2 rounded-lg bg-opacity-20 shadow-md"}` : "w-full py-2 my-1" 
      }  
      onClick={() => isOpen && setOpen(false)}
    >
      <div className="flex items-center w-full">
        <div className="text-lg mb-1 mr-3">{icon}</div>
        <span className="my-2 font-nunito w-full">{title}</span>
        {showChevron && <FaChevronRight className="ml-1 text-white" />}
      </div>
    </NavLink>
  );
};

export default SidebarButton;
