import React from 'react'
import sublinks from './data';
import { getGlobalContextData } from './GetGlobalContext';
import { IoClose } from "react-icons/io5";

const Sidebar = () => {

  const {isSideBarOpen,closeSidebar} = getGlobalContextData();
  return (

    isSideBarOpen &&
    <section className='sidebar'>
        {sublinks.map((sublink) =>{
            return (
                <div key={sublink.pageId}>
                    <p>{sublink.page}</p>
                    <div className='icons'>
                        {sublink.links.map((link) =>{
                            return(
                            <a id={link.id} href={link.url}>

                              {link.icon}
                              {link.label}
                            </a>

                            )
                        })}
                    </div>


                </div>
            )
        })}

        <button className='sidebarButton' onClick={closeSidebar}>
        <IoClose />
        </button>
    </section>
  )
}

export default Sidebar