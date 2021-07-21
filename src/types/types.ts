
export type UsersType ={
    id: null
    name: string
    status: string
    photos: PhotosType
}
export type PostType ={
    id : number
    message: string
    likeCount: number
}
export type ContactsType ={
    github:string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType ={
    small: string | null
    large: string | null

}
export type ProfileType ={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescripton: string
    fullName: string
    contacts : ContactsType
    photos:PhotosType

}
