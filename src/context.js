import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const openSidebar = () =>{
        setIsSidebarOpen(true);
    }
    const closeSidebar = () =>{
        setIsSidebarOpen(false);
    }
    const openSubmenu = () =>{
        setIsSidebarOpen(true);
    }
    const closeSubmenu = () =>{
        setIsSidebarOpen(false);
    }
    return(
        <AppContext.Provider
            value={{
                isSidebarOpen,
                isSubmenuOpen,
                openSidebar,
                closeSubmenu,
                openSubmenu,
                closeSidebar
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}