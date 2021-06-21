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

        console.warn('123')
        return profileAPI.getProfile(userId)


    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status:status});
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







