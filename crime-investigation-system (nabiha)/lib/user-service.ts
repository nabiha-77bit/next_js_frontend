// import apiClient from "./api-client"
//
// const UserService = {
//     // Existing methods...
//
//     // Get user's first and last name
//     async getUserName(email: string): Promise<string> {
//         try {
//             const response = await apiClient.get(`/user/first_lastname/${email}`)
//             return response.data
//         } catch (error) {
//             console.error("Error fetching user name:", error)
//             throw error
//         }
//     },
//
//     // Other methods...
// }
//
// export default UserService