import React from 'react'
import { getGlobalContextData } from './GetGlobalContext';
const Hero = () => {

  const {setPageId} = getGlobalContextData();

  function handleNavOver(){

   
    setPageId(' ');

  }
  return (
    <section className='heroSection' onMouseOver={handleNavOver}>
        <h1>Manage any content anywhere</h1>

        <h5>Strapi is the leading open-source headless CMS. It’s 100% JavaScript and fully customizable.</h5>
    </section>
  )
}

export default Hero