import React, {FC} from 'react';
import  s from "./ModalForm.module.css"
import submit_icon from "../../assets/image/submit_icon.png"
import cancel_icon from "../../assets/image/cancel_icon.png"
import Button from "../Button/Button";
import close_icon from "../../assets/image/close_icon.png"
import {useNavigate} from "react-router-dom";


const SUCC="Форма успешно отправлена"
const DENIED="Ошибка"
interface IModalForm{
    setModal:(modal:boolean)=>void;
    isSubmit:boolean;
}
const ModalForm:FC<IModalForm> = ({setModal,isSubmit}) => {
    const navigate=useNavigate();

    function handleClick() {
        if(isSubmit){
            navigate("/")
        }else{
            setModal(false)
        }
    }

    function handleClose() {
        setModal(false)
    }

    return (
        <div className={s.modal_wrapper}>
            <div className={s.modal} onClick={(e)=>{e.stopPropagation()}}>

                <div className={s.title} style={{textAlign:isSubmit?"center":"left"}}>
                    {isSubmit?SUCC:DENIED}
                    {!isSubmit&&
                    <div className={s.close} onClick={handleClose}>
                        <img src={close_icon} alt={"#"}/>
                    </div>
                    }
                </div>
                <div
                    className={s.result}
                    style={{background:isSubmit?"rgba(5, 174, 113, 0.15)":"rgba(232, 78, 88, 0.15)"}}
                >
                    <img src={isSubmit?submit_icon:cancel_icon} alt={"#"}/>
                </div>
                <div style={{alignSelf:isSubmit?"center":"end"}}>
                    <Button id={isSubmit?"button-to-main":"button-close"} outlined={false} onClick={handleClick}>{isSubmit?"На главную":"Закрыть"}</Button>
                </div>

            </div>
        </div>
    );
};

export default ModalForm;