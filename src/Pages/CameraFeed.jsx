import React, { useEffect, useReducer } from "react";
import {CameraFilled }  from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import {Spin} from "antd";

const CameraFeed  = () =>{

const initialState = {
    data:[],
    camStatus:null,
    loading:false
}
const reducer = (state,action)=>{
    switch(action.type){
    case "CAM_DATA":
        return {...state , data:action.payload}
    case "CAM_STATUS":
        return {...state, camStatus:action.payload}
    case 'LOADING':
        return {...state, loading:action.payload}
    default: {
        state
    }    
    }
}

const [state, dispatch ] = useReducer(reducer , initialState)



useEffect(()=>{
    const url = "http://localhost:8000/api/cameras/"
    axios.get(url).then((res)=>dispatch({type:"CAM_DATA",payload:res.data})).catch(err => console.log(err))
},[])

const handleChange= (val) =>{
    dispatch({type:'LOADING',payload:true})
    dispatch({type:"CAM_STATUS",payload:val.id})
    setTimeout(()=>{
        dispatch({type:'LOADING',payload:false})
    },[3000])
}
    
return (
<>
<div className="  text-3xl p-3 rounded-tr-lg rounded-tl-lg  font-semibold">Cameras </div>
<div className="flex p-3 gap-3">
    <div className="w-[35%] h-1/2 min-h-[350px] rounded-lg p-3 flex flex-col gap-4" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
    {
        state.data?.map((cam, index)=>{
            return(
                <li key={cam.id} onClick={()=>handleChange(cam)} className="Camera-link">{cam.name}<CameraFilled /></li>
            )
        })
    }
 
    
    
    </div>
    <div className="w-full bg-gray-200 h-full rounded-md">

        {  
            state.loading ? <div className="flex w-full h-[350px] justify-center items-center"><Spin/></div>  :
            state.data && (
                <img src={`http://localhost:8000/api/camera/${state.camStatus}/stream/`} className="w-full h-1/2 max-h-[350px]" alt="Camera Loading" />
            )
        }
    </div>
</div>
</>
    )
}


export default CameraFeed;
