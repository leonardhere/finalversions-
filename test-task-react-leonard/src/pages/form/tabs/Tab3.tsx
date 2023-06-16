import React, {ChangeEvent, FC, useState} from 'react';
import CustomArea from "../../../UI/CustomArea/CustomArea";
import s from "./Tabs.module.css"
import Button from "../../../UI/Button/Button";
import {setStep} from "../../../store/reducers/stepSlice";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/typedHook";
import {formActions} from "../../../store/reducers/formSlice";

const Tab3:FC<{submitForm:()=>void}> = ({submitForm}) => {
    const dispatch=useAppDispatch()
    const {about}=useAppSelector(state=>state.form)
    const [errorTextarea,setErrorTextarea]=useState(false)
    const handleStep=(step:number)=>{
        dispatch(setStep({step}))
    }
    const editTextarea=(event:ChangeEvent<HTMLTextAreaElement>)=> {
        if(errorTextarea){
            setErrorTextarea(false)
        }
        const about=event.target.value
        const trim = about.replace(/\s/g, '');
        if (trim.length<=200){
            dispatch(formActions.setAbout({about}))
        }else{
            setErrorTextarea(true)
            setTimeout(()=>{
                setErrorTextarea(false)
            },400)
        }

    }
    ///////////validation block
    const validationTextarea=()=>{
        if(about.length===0){
            setErrorTextarea(true)
            return false
        }
        return true
    }

    const handleCLick=()=>{
        const textareaV=validationTextarea()
        if(textareaV){
            submitForm()
        }

    }
    return (
        <div>
            <CustomArea
                isError={errorTextarea}
                text={about}
                onChange={editTextarea}
            />
            <div className={s.button_group}>
                <Button id={"button-back"} outlined={true} onClick={()=>handleStep(1)} >Назад</Button>
                <Button id={"button-send"} outlined={false} onClick={handleCLick} >Отправить</Button>
            </div>
        </div>
    );
};

export default Tab3;