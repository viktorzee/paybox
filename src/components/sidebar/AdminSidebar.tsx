import { useSidebar } from "../../context/SidebarContext";
import Hamburger from "./Hamburger";
import AdminSidebarContent from "./AdminSidebarContent";

const AdminSidebar = () => {
  const [isOpen, setOpen] = useSidebar();

  return (
    <>
      <AdminSidebarContent />
      <Hamburger isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

export default AdminSidebar;
