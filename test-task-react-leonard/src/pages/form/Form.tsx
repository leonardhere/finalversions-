import React, {FC, useState} from 'react';
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";
import s from "./Form.module.css"
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import { useAppSelector} from "../../store/hooks/typedHook";
import ModalForm from "../../UI/ModalForm/ModalForm";

const SUBMIT_URL="https://api.sbercloud.ru/content/v1/bootcamp/frontend"
const Form:FC = () => {

   const {step}=useAppSelector(state=>state.step)

    const store=useAppSelector(state=>state)
    const [modal,setModal]=useState<boolean>(false)
    const [isSubmit,editSubmit]=useState<boolean>(false)
    const submitForm=async ()=>{
        const formData={
            "phone":store.user.phone,
            "email":store.user.email,
            "nickname":store.form.nickname,
            "name":store.form.name,
            "surname":store.form.surname,
            "sex":store.form.sex,
            "advantages":store.form.advantages,
            "checkbox":store.form.checkbox.map(el=>el.label),
            "radio":store.form.radio.filter(el=>el.checked===true),
            "about":store.form.about
        }
        fetch(SUBMIT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(()=>{
            editSubmit(true)
            setModal(true)
        }).catch(()=>{
            editSubmit(false)
            setModal(true)
        })
    }
    return (
        <div className={s.form}>
            {modal&&<ModalForm setModal={setModal} isSubmit={isSubmit} />}
            <div className={s.progress_bar_wrapper}>
                <ProgressBar step={step}/>
            </div>
            <div className={s.tab_wrapper}>
                {step === 0 && <Tab1 />}
                {step === 1 && <Tab2 />}
                {step === 2 && <Tab3 submitForm={submitForm}/>}
            </div>

        </div>
    );
};

export default Form;