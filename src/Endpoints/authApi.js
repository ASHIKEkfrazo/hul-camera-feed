import { apiCall } from "../API/API";


export const loginApi = async (data) => {
    try {
        const response = await apiCall.post("login/", data)
        return response
    } catch (error) {
        console.log(error, "Error During Login")
        throw error
    }
}