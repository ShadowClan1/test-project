import { useState } from "react";
import Context1 from "./Context1"


const Context2 = (props)=>{
    const [data, setData ] = useState([]); 
    const api = "https://api.tvmaze.com/search/shows?q=all"; 
    const getDetails = async () =>   {

        const showDetails =  await  fetch(api, {method : "GET"})
        const Apidata = await showDetails.json()
        setData(Apidata);
        
       }

return <Context1.Provider value={{getDetails, data, setData}}>

{props.children}


</Context1.Provider>



}

export default Context2;