import { useSidebar } from "../../context/SidebarContext";
// import AdminUserMenu from "../userMenu/AdminUserMenu";
import ScrollToTop from "../ScrollToTop";
import AdminSidebar from "../sidebar/AdminSidebar";

type AdminUserContainerProps = {
  children: React.ReactNode
}

const AdminUserContainer = ({ children }: AdminUserContainerProps) => {
  const [isOpen] = useSidebar();

  return (
    <div className="wrapper">
      <AdminSidebar />
      <div className="md:rounded-[30px] overflow-hidden bg-white flex-1 flex md:my-4 md:mr-4 ">
        {/* <AdminUserMenu /> */}
        <div
          className={`relative ${
            isOpen ? "left-76 xl:left-0" : "left-0"
          } flex-1 grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 ease-in-out`}
        >
          <div className="h-full lg:col-span-12 bg-[rgba(246,250,255,1)]">{children}</div>          
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default AdminUserContainer;
