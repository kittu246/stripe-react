import {useState,createContext,useContext} from 'react'

const globalContext = createContext();
export const getGlobalContextData = () => useContext(globalContext);



const GetGlobalContext = (props) => {

    const [ isSideBarOpen, setIsSideBarOpen ] = useState(false);
    const [ pageId, setPageId ] = useState('');
    const [selectedProd,setSelectedProd]= useState(null);

    function openSidebar(){
        setIsSideBarOpen(true) 
    }

    function closeSidebar(){
        setIsSideBarOpen(false) 
    }

  return (

    <globalContext.Provider value={{isSideBarOpen,openSidebar,closeSidebar,pageId,setPageId,setSelectedProd,selectedProd}}>

        {props.children}

    </globalContext.Provider>
    
  )
}

export default GetGlobalContext