import axios from "axios"

const baseUrl = "https://huldev.aivolved.in/api"

const apiCall = axios.create({
    baseURL: baseUrl
})

export { apiCall }