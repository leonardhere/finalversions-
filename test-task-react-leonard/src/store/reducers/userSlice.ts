import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserInfo{
    phone:string;
    email:string;
}

const initialState:UserInfo={
    phone:"",
    email:""
}

 const userSlice= createSlice({
    name:"user_info",
    initialState,
    reducers:{
        setPhone(state,action:PayloadAction<Pick<UserInfo, "phone">>){

            const {phone}=action.payload
            state.phone=phone
        },
        setEmail(state,action:PayloadAction<Pick<UserInfo, "email">>){

            const {email}=action.payload
            state.email=email
        }
    }
})

export default userSlice.reducer
export const {setPhone,setEmail}=userSlice.actions