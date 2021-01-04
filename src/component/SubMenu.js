import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context';


const  SubMenu = () => {
    const { openSubmenu, location, page: {page , links}} = useGlobalContext();
    const container                                                           = useRef(null);
    const [ column, setColumn ]                                       = useState('col-2');

    useEffect(() => {
       const submenu              = container.current;
       const { center, bottom } = location;
       submenu.style.left          = `${ center }px`;
       submenu.style.bottom   = `${ bottom }px`;

       if(links.length ===3){
           setColumn('col-3');
       }
       if( links.length >= 4){
           setColumn('col-4');
       }
    }, [location])
    
    return (
        <aside className={`${openSubmenu ? 'submenu show': 'submenu'}`}  ref={ container }>
           <h4>{page}</h4>
           <div className={`submenu-center ${column}`}>
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