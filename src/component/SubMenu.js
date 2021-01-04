import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';


const  SubMenu = () => {
    const { openSubmenu, location, page: {page , links}} = useGlobalContext();
    const container                                                           = useRef(null);

    useEffect(() => {
       const submenu              = container.current;
       const { center, bottom } = location;
       submenu.style.left          = `${ center }px`;
       submenu.style.bottom   = `${ bottom }px`;
    }, [location])
    
    return (
        <aside className={`${openSubmenu ? 'submenu show': 'submenu'}`}  ref={ container }>
           <h4>{page}</h4>
           <div className={`submenu-center col-2`}>
               {links.map((link, index) =>{
                   const { label, icon, url } = link;
                   return (
                       <a key={index} href={url}>
                           {icon}
                           {label}
                       </a>
                   )
               })}
           </div>
        </aside>
    )
}
export default SubMenu;