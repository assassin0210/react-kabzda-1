
type FriendsType ={
 name: string
 avatar:string
}

let initialState = {
 friends: [
  {name: 'Iarik', avatar: "https://image.flaticon.com/icons/png/128/146/146037.png"},
  {name: 'Masha', avatar: "https://image.flaticon.com/icons/png/128/146/146036.png"},
  {name: 'Aurika', avatar: "https://image.flaticon.com/icons/png/128/146/146034.png"},
] as Array<FriendsType>,
};
type InitialStateType = typeof initialState

 export const sidebarReducer = (state = initialState,action:any) :InitialStateType => {

return state;


};
