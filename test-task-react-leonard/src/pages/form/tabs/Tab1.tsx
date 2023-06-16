import React, {FC, useState} from 'react';
import InputWithLabel, {TypeEnum} from "../../../UI/InputWithLabel/InputWithLabel";
import Select from "../../../UI/Select/Select";
import  s from "./Tabs.module.css"
import Button from "../../../UI/Button/Button";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/typedHook";
import {formActions, Sex} from "../../../store/reducers/formSlice";
import {setStep} from "../../../store/reducers/stepSlice";

enum ErrorNickname{
    empty="",
    null="Поле не может быть пустым",
    incorrect="Максимальная длина 30 символов"
}
enum ErrorName{
    empty="",
    null="Поле не может быть пустым",
    incorrect="Максимальная длина 50 символов"
}
enum ErrorSex{
    empty="",
    incorrect="Выбирите значение"
}


const Tab1:FC = () => {
    const navigate=useNavigate();
    const dispatch=useAppDispatch()
    const {nickname,name,sex,surname}=useAppSelector(state=>state.form)

    const [errorNickname,setErrorNickname]=useState({
        isError:false,
        error:ErrorNickname.empty
    })
    const [errorName,setErrorName]=useState({
        isError:false,
        error:ErrorName.empty
    })
    const [errorSurname,setErrorSurname]=useState({
        isError:false,
        error:ErrorName.empty
    })
    const [errorSex,setErrorSex]=useState({
        isError:false,
        error:ErrorSex.empty
    })

    const editNickname=(nickname:string)=>{
        if(errorNickname.isError){
            setErrorNickname({
                isError:false,
                error:ErrorNickname.empty
            })
        }
        dispatch(formActions.setNickname({nickname}))
    }
    const editName=(name:string)=>{
        if(errorName.isError){
            setErrorName({
                isError:false,
                error:ErrorName.empty
            })
        }
        dispatch(formActions.setName({name}))
    }
    const editSurname=(surname:string)=>{
        if(errorSurname.isError){
            setErrorSurname({
                isError:false,
                error:ErrorName.empty
            })
        }
        dispatch(formActions.setSurname({surname}))
    }
    const editSex=(sex:Sex)=>{
        if(errorSex.isError){
            setErrorSex({
                isError:false,
                error:ErrorSex.empty
            })
        }
        dispatch(formActions.setSex({sex}))
    }

    const handleStep=(step:number)=> {
        dispatch(setStep({step}))
    }

    //////////////validation block
    const validationNickname=()=>{
        if(nickname.length===0){
            setErrorNickname({
                error: ErrorNickname.null,
                isError: true
            })
            return false
        }
        if(nickname.length>30){
            setErrorNickname({
                error: ErrorNickname.incorrect,
                isError: true
            })
            return false
        }
        return true
    }
    const validationName=()=>{
        if(name.length===0){
            setErrorName({
                error: ErrorName.null,
                isError: true
            })
            return false
        }
        if(name.length>50){
            setErrorName({
                error: ErrorName.incorrect,
                isError: true
            })
            return false
        }
        return true
    }
    const validationSurname=()=>{
        if(surname.length===0){
            setErrorSurname({
                error: ErrorName.null,
                isError: true
            })
            return false
        }
        if(surname.length>50){
            setErrorSurname({
                error: ErrorName.incorrect,
                isError: true
            })
            return false
        }
        return true
    }
    const validationSex=()=>{
        if(sex===Sex.empty){
            setErrorSex({
                error: ErrorSex.incorrect,
                isError: true
            })
            return false
        }

        return true
    }
    const handleCLick=()=>{
        const nicknameV=validationNickname()
        const nameV=validationName()
        const surnameV=validationSurname()
        const sexV=validationSex()
        if(nicknameV&&nameV&&surnameV&&sexV){
            handleStep(1)
        }

    }
    return (
        <div className={s.tab1}>
            <InputWithLabel
                id={"field-nickname"}
                error={errorNickname.error}
                isError={errorNickname.isError}
                data={nickname}
                editData={editNickname}
                label={"Nickname"}
                type={TypeEnum.Text}
            />
            <InputWithLabel
                id={"field-name"}
                error={errorName.error}
                isError={errorName.isError}
                data={name}
                editData={editName}
                label={"Name"}
                type={TypeEnum.Text}
            />
            <InputWithLabel
                id={"field-sername"}
                error={errorSurname.error}
                isError={errorSurname.isError}
                data={surname}
                editData={editSurname}
                label={"Surname"}
                type={TypeEnum.Text}
            />
            <Select
                id={"field-sex"}
                error={errorSex.error}
                isError={errorSex.isError}
                data={sex}
                editData={editSex}
            />
            <div className={s.button_group}>
                <Button id={"button-back"} outlined={true} onClick={()=>navigate("/")}>Назад</Button>
                <Button id={"button-next"} outlined={false} onClick={handleCLick}>Далее</Button>
            </div>
        </div>
    );
};

export default Tab1;