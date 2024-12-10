import React, { useContext, useEffect, useReducer } from "react";
import {CameraFilled }  from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import {Spin} from "antd";
import { ClusterContext } from "../ContextApi/clustercontext";
import { CamDataContext } from "../ContextApi/CamDataContext";

const CameraFeed  = () =>{

    const {state_Cluster , dispatchCluster } = useContext(ClusterContext)
    const {state_CamData , dispatchCamData} = useContext(CamDataContext)





useEffect(()=>{
    const url = `http://localhost:8000/api/clusters/${state_Cluster?.activeCluster?.id}/cameras/`
    axios.get(url).then((res)=>dispatchCamData({type:"CAM_DATA",payload:res.data})).catch(err => console.log(err))
},[state_Cluster?.activeCluster])

const handleChange= (val) =>{
    dispatchCamData({type:'LOADING',payload:true})
    dispatchCamData({type:"CAM_STATUS",payload:val.id})
    dispatchCamData({type:"ACTIVE_ID",payload:val.id})
    setTimeout(()=>{
        dispatchCamData({type:'LOADING',payload:false})
    },[3000])
}
    
console.log(state_CamData.data)
return (
<>
<div className="  text-3xl p-3 rounded-tr-lg rounded-tl-lg  font-semibold">{state_Cluster?.activeCluster?.name}</div>
<div className="flex p-3 gap-3">
    <div className="w-[35%] h-1/2 min-h-[350px] rounded-lg p-3 flex flex-col gap-4" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      {
        state_CamData?.data.length > 0 ?

       <>
       {state_CamData?.data?.map((cam, index) => {
        const isActive = state_CamData?.activeId === cam.id; // Check if this item is active
        return (
          <li
            key={cam.id}
            onClick={() => handleChange(cam)}
            className={`Camera-link ${isActive ? "active" : ""}`}
            style={{
              backgroundColor: isActive ? "#43996a" : "#06175d", // Apply bg color dynamically
              cursor: "pointer", // Optional for better UX
            }}
          >
            {cam.name}
            <CameraFilled />
          </li>
        );
      })}
       </>
       : <div className="text-black flex items-center w-full h-full justify-center font-bold">Please Select Cluster </div>
 
      }
      
    
    
    </div>
    <div className="w-full bg-gray-200 h-full rounded-md">
        {
            state_CamData.activeId ?

            <div className="">
        {  
            state_CamData.loading ? <div className="flex w-full h-[500px] justify-center items-center"><Spin/></div>  :
            state_CamData.data && (
                <img src={`http://localhost:8000/api/camera/${state_CamData?.camStatus}/stream/`} className="w-full h-[500px] min-h-[350px]" alt="Camera Loading" />
            )
        }
</div> :
<div className="flex w-full h-[500px] justify-center items-center font-bold text-2xl">
Please Select Camera
</div>
        }


    </div>
</div>
</>
    )
}


export default CameraFeed;
