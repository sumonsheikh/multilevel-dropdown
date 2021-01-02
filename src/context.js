import React, {useState, useContext} from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

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