import { apiCall } from "../API/Api-Instance";


const clusterApiCall =  async()=>{
    try {
        let url = 'clusters/names/'
        const response =  await apiCall.get(url)
        return response

    } catch (error) {
        console.log(error)
    }
}



export {
     clusterApiCall
}