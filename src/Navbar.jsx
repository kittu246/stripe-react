import React from 'react'
import sublinks from './data';
import { getGlobalContextData } from './GetGlobalContext';
import { IoMenu } from "react-icons/io5";



const Navbar = () => {
  

    const {openSidebar,setPageId,pageId} = getGlobalContextData();

    
    
    
  return (
    <nav >
        <h3>STRAPI</h3>

        <ul className='strapiOptions'>
            {sublinks.map((sublink)=>{
                return (
                    <li id={sublink.pageId} key={sublink.pageId} onMouseOver={(e)=>{ setPageId(e.target.id)
                        
                        }
              }> {sublink.page}  </li>
                )
            })}
        </ul>

        <button className='menuButton' onClick={openSidebar}>
          <IoMenu />
        </button>
        
    </nav>
  )
}

export default Navbar