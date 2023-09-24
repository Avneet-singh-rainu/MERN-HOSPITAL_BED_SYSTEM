import React from 'react'
import { CircleLoader } from "react-spinners";
export const Spinner = () => {
 return (
   <div className="loader">
     <CircleLoader color="#000 " size={100} />
   </div>
 );
}
