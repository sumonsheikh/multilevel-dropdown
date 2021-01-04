import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';


const  SubMenu = () => {
    const { openSubmenu, location } = useGlobalContext();
    const container                            = useRef(null);
    useEffect(() => {
       const submenu              = container.current;
       const { center, bottom } = location;
       submenu.style.left          = `${ center }px`;
       submenu.style.bottom   = `${ bottom }px`;
    }, [location])
    return (
        <aside className={`${openSubmenu ? 'submenu show': 'submenu'}`}  ref={ container }>
                submenu
        </aside>
    )
}
export default SubMenu;