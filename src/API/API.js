import * as axios from "axios"
import {savePhoto} from "../Redux/profile-reducer";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "3add281b-3e99-4da5-9bb5-a004a896916b"
    }
});

export const userAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

            .then(response => {

                return response.data
            });
    },
    follow(userId) {

        return instance.post(`follow/${userId}`,)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {

        console.warn('123')
        return profileAPI.getProfile(userId)


    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image',photoFile )
        return instance.put(`profile/photo`, formData,{
            headers:{
                'Content-type': 'multipart/form-data'
            }
        });

    },
    saveProfile(profile){
        return instance.put(`profile`, profile);
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false,captcha = null) {

        return instance.post(`auth/login`, {email, password, rememberMe,captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }

}








