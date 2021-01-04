import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    const [ isSidebarOpen, setIsSidebarOpen ]       = useState( false );
    const [ isSubmenuOpen, setIsSubmenuOpen ] = useState( false );
    const [ location, setLocation ]                            = useState( { } ) ;

    const openSidebar = () =>{
        setIsSidebarOpen(true);
    }
    const closeSidebar = () =>{
        setIsSidebarOpen(false);
    }
    const openSubmenu = ( text, coordinates) =>{
        setLocation( coordinates );
        setIsSidebarOpen( true );
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
                closeSidebar,
                location
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}