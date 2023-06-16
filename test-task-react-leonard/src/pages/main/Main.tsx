import React, {FC, useEffect, useState} from 'react';
import s from "./Main.module.css"
import Head from "./Head/Head";
import InputWithLabel, {TypeEnum} from "../../UI/InputWithLabel/InputWithLabel";
import Button from "../../UI/Button/Button";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks/typedHook";
import {setEmail, setPhone} from "../../store/reducers/userSlice";
import {setStep} from "../../store/reducers/stepSlice";


enum ErrorPhone{
    empty="",
    null="Поле не может быть пустым",
    incorrect="Некорректный формат номера телефона"
}
enum ErrorEmail{
    empty="",
    null="Поле не может быть пустым",
    incorrect="Некорректный формат email"
}

const Main : FC = () => {
    const navigate=useNavigate();
    const {phone,email}=useAppSelector(state=>state.user)
    const dispatch=useAppDispatch()

    const [errorPhone,setErrorPhone]=useState({
        isError:false,
        error:ErrorPhone.empty
    })
    const [errorEmail,setErrorEmail]=useState({
        isError:false,
        error:ErrorEmail.empty
    })

    const editPhone=(phone:string)=>{
        if(errorPhone.isError){
            setErrorPhone({
                isError:false,
                error:ErrorPhone.empty
            })
        }
        dispatch(setPhone({phone}))
    }
    const editEmail=(email:string)=>{
        if(errorEmail.isError){
            setErrorEmail({
                isError:false,
                error:ErrorEmail.empty
            })
        }
        dispatch(setEmail({email}))
    }
//////////////validation block
    const validationPhone=()=>{
        if(phone.length===0){
            setErrorPhone({
                error: ErrorPhone.null,
                isError: true
            })
            return false
        }
        const regExp=/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/
        if(!regExp.test(phone)){
            setErrorPhone({
                error: ErrorPhone.incorrect,
                isError: true
            })
            return false
        }
        return true
    }
    const validationEmail=()=>{
        if(email.length===0){
            setErrorEmail({
                error: ErrorEmail.null,
                isError: true
            })
            return false
        }
        const regExp=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        if(!regExp.test(email)){
            setErrorEmail({
                error: ErrorEmail.incorrect,
                isError: true
            })
            return false
        }
        return true
    }
    const handleClick=()=>{
        if(validationPhone()&&validationEmail()){
            navigate("/form")
        }
    }
//////////////////////////////////////
    const initialtState=()=>{
        dispatch(setStep({step:0}))
    }
    useEffect(()=>{
        initialtState()
// eslint-disable-next-line
    },[])
    return (
        <div className={s.main}>
            <Head/>
            <InputWithLabel
                id={""}
                error={errorPhone.error}
                isError={errorPhone.isError}
                data={phone}
                editData={editPhone}
                label={"Номер телефона"}
                type={TypeEnum.Number}
            />
            <InputWithLabel
                id={""}
                error={errorEmail.error}
                isError={errorEmail.isError}
                data={email}
                editData={editEmail}
                label={"Email"}
                type={TypeEnum.Text}
            />
            <div style={{height:60}}></div>
            <Button id={"button-start"}  outlined={false} onClick={handleClick}>Начать</Button>
        </div>
    );
};

export default Main;