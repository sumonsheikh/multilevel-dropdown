import React from 'react';
import { useGlobalContext } from '../context';


const  SubMenu = () => {
    const { openSubmenu} = useGlobalContext();
    return (
        <aside className={`${openSubmenu ? 'submenu show': 'submenu'}`} >
                submenu
        </aside>
    )
}
export default SubMenu;