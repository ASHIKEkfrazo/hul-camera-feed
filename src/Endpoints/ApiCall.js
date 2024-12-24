import { apiCall } from "../API/Api-Instance";


const clusterApiCall =  async()=>{
    try {
        let url = 'clusters/'
        const response =  await apiCall.get(url)
        return response.data.results

    } catch (error) {
        console.log(error)
    }
}


const clusterMcahineApi = async(clusterId) =>{
    try {
     
        let url = `machines/`
        const response = await apiCall.get(url)
        return response.data.results
    } catch (error) {
        console.log(error)
    }
}

const clusterMachineCameras = async(machineId)=>{
    try {
     
        let url = `cameras/`
        const response = await apiCall.get(url)
        return response.data.results
    } catch (error) {
        console.log(error)
    }
}

export {
     clusterApiCall,
     clusterMcahineApi,clusterMachineCameras
}