import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum Sex{
    empty="",
    man="man",
    woman="woman"
}

interface FormInfo{
    nickname:string;
    name:string;
    surname:string;
    sex:Sex;
    advantages:Array<string>;
    checkbox:Array<ICheckbox>;
    radio:Array<IRadio>;
    about:string;


}

export interface ICheckbox{
    label:number;
    checked:boolean;
}
export interface IRadio{
    label:number;
    checked:boolean;
}

const initialState:FormInfo={

    nickname:"",
    name:"",
    surname:"",
    sex:Sex.empty,
    advantages:[
        "","",""
    ],
    checkbox:[
        {label:1,checked:false},
        {label:2,checked:false},
        {label:3,checked:false}
    ],
    radio:[
        {label:1,checked:false},
        {label:2,checked:false},
        {label:3,checked:false}
    ],
    about:""

}

const formSlice= createSlice({
    name:"form_info",
    initialState,
    reducers:{
        setNickname(state,action:PayloadAction<Pick<FormInfo,"nickname">>){
            const {nickname}=action.payload
            state.nickname=nickname
        },
        setName(state,action:PayloadAction<Pick<FormInfo,"name">>){
            const {name}=action.payload
            state.name=name
        },
        setSurname(state,action:PayloadAction<Pick<FormInfo,"surname">>){
            const {surname}=action.payload
            state.surname=surname
        },
        setSex(state,action:PayloadAction<Pick<FormInfo,"sex">>){
            const {sex}=action.payload
            state.sex=sex
        },
        setAdvantages(state,action:PayloadAction<{index:number,advantages:string}>){
            const {advantages,index}=action.payload
            state.advantages[index]=advantages
        },
        addAdvantages(state){
            state.advantages.push("")
        },
        deleteAdvantages(state,action:PayloadAction<{index:number}>){
            const {index}=action.payload
            state.advantages=state.advantages.filter((el, i) => i !== index)
        },
        setCheckbox(state,action:PayloadAction<{index:number}>){
            const {index}=action.payload
            state.checkbox[index].checked=!state.checkbox[index].checked
        },
        setRadio(state,action:PayloadAction<{index:number}>){
            const {index}=action.payload
            for (let i=0;i<state.radio.length;i++){
                state.radio[i].checked = i === index;

            }
        },
        setAbout(state,action:PayloadAction<Pick<FormInfo,"about">>){
            const {about}=action.payload
            state.about=about
        },


    }
})

export default formSlice.reducer
export const formActions= formSlice.actions