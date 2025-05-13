// import axios from "axios"
// import Cookies from "js-cookie"
//
// // Create axios instance with base URL
// const apiClient = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080", // Default to localhost if not set
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded", // Changed to match Spring Boot's @RequestParam
//     },
// })
//
// // Add request interceptor to include auth token in headers
// apiClient.interceptors.request.use(
//     (config) => {
//         const token = Cookies.get("auth_token")
//         if (token) {
//             config.headers["Authorization"] = `Bearer ${token}`
//         }
//         return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     },
// )
//
// // Add response interceptor to handle common errors
// apiClient.interceptors.response.use(
//     (response) => {
//         return response
//     },
//     (error) => {
//         // Handle unauthorized errors (redirect to login)
//         if (error.response && error.response.status === 401) {
//             // Clear auth data
//             Cookies.remove("auth_token")
//             Cookies.remove("user_type")
//             Cookies.remove("user_data")
//
//             // Only redirect if we're in the browser
//             if (typeof window !== "undefined") {
//                 window.location.href = "/"
//             }
//         }
//         return Promise.reject(error)
//     },
// )
//
// export default apiClient
