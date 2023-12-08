import React from 'react'
import sublinks from './data';
import { getGlobalContextData } from './GetGlobalContext';

const Submenu = () => {

    const {pageId,setSelectedProd,selectedProd} = getGlobalContextData();
    console.log(pageId)

    if(pageId){
        const selectedMenu = sublinks.filter((sublink) =>{
            return sublink.pageId == pageId
         })
         setSelectedProd(selectedMenu[0]) ;
         
    }
   
  return (
    selectedProd &&
    <section className='submenu'>

        {
            
            <div >
                         <p>{selectedProd.page}</p>
                         <div className='icons'>
                             {selectedProd.links.map((link) =>{
                                 return(
                                 <a key={link.id} id={link.id} href={link.url}>
     
                                   {link.icon}
                                   {link.label}
                                 </a>
     
                                 )
                             })}
                         </div>
     
     
                     </div>
        }
       



   


    </section>
  )
}

export default Submenu