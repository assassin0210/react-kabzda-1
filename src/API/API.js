import * as axios from "axios"


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "cbcde0e3-df17-4db1-9297-7cb8d5ce0fe0"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId){
        return instance.post(`follow/${userId}`,)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return instance.get(`/profile/${userId}`)


    }
}

export const authAPI = {
    me (){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });


    },

}







