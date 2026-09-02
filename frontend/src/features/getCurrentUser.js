import api from "../../utlis/axios"


const getCurrentUser=async() => {
    try {
        const {data} = await api.get("/api/me")
    } catch (error) {
        console.log(error)
    }
}

export default getCurrentUser