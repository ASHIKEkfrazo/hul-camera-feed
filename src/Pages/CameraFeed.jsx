import React from "react";
import {CameraFilled }  from "@ant-design/icons";

const CameraFeed  = () =>{


    
return (
<>
<div className="  text-3xl p-3 rounded-tr-lg rounded-tl-lg  font-semibold">Cameras </div>
<div className="flex p-3 gap-3">
    <div className="w-1/4 h-1/2 min-h-[400px] rounded-lg shadow-lg p-3 flex flex-col gap-4">
    {/* <div className="text-2xl font-semibold p-1 ">Cameras</div> */}
 
        <li className="Camera-link">Camera 1 <CameraFilled /></li>
        <li className="Camera-link">Camera 2 <CameraFilled /></li>
        <li className="Camera-link">Camera 3 <CameraFilled /></li>
        <li className="Camera-link">Camera 4 <CameraFilled /></li>
    
    </div>
    <div className="w-3/4 bg-gray-200 h-1/2 min-h-[400px] rounded-md">
     
    </div>
</div>
</>
    )
}


export default CameraFeed;
