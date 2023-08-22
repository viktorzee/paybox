import { createContext, useContext, useState } from "react";


type ContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
const SidebarContext = createContext<ContextType | undefined>(undefined);
type ContextProps = {
  children: React.ReactNode
}

// Custom sidebar hook to provide context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }

  return context;
};

export const SidebarProvider= ({ children }: ContextProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <SidebarContext.Provider value={[isOpen, setOpen]}>
      {children}
    </SidebarContext.Provider>
  );
};
