import React, {FC, useEffect, useState} from 'react';
import CheckGroup from "../../../UI/CheckGroup/CheckGroup";
import RadioGroup from "../../../UI/RadioGroup/RadioGroup";
import InputGroup from "../../../UI/InputGroup/InputGroup";
import Button from "../../../UI/Button/Button";
import s from "./Tabs.module.css"
import {useAppDispatch, useAppSelector} from "../../../store/hooks/typedHook";
import {formActions} from "../../../store/reducers/formSlice";
import {setStep} from "../../../store/reducers/stepSlice";


export type ErrorType={
    isError:boolean
}
const Tab2:FC = () => {
    const dispatch=useAppDispatch()
    const {advantages,checkbox,radio}=useAppSelector(state=>state.form)

    const [errorAdvantages,setErrorAdvantages]=useState<ErrorType[]>([])
    const [errorCheckbox,setErrorCheckbox]=useState(false)
    const [errorRadio,setErrorRadio]=useState(false)

    const editaAdvantages=(index:number, advantages:string)=>{//TODO
        let newErrorCatalog:ErrorType[]=[...errorAdvantages]
        newErrorCatalog[index].isError=false
        setErrorAdvantages(newErrorCatalog)
        dispatch(formActions.setAdvantages({index, advantages}))
    }
    const editCheckbox=(index:number)=>{
        setErrorCheckbox(false)
        dispatch(formActions.setCheckbox({index}))
    }
    const editaRadio=(index:number)=>{
        setErrorRadio(false)
        dispatch(formActions.setRadio({index}))
    }
    const handleStep=(step:number)=>{
        dispatch(setStep({step}))
    }

    ////////////////validation block
    const validationAdvantages=()=>{
        let miss:boolean=false
        const newCatalogError:ErrorType[]=[]
        advantages.forEach(el=>{
            if (el===""){
                newCatalogError.push({isError:true})
                miss=true
            }else{
                newCatalogError.push({isError:false})
            }
        })
        setErrorAdvantages(newCatalogError)
        return !miss;

    }

    const validationCheckbox=()=>{
        let miss:boolean=true
        checkbox.forEach(el=>{
            if(el.checked){
                miss=false
            }
        })
        setErrorCheckbox(miss)
        return !miss
    }
    const validationRadio=()=>{
        let miss:boolean=true
        radio.forEach(el=>{
            if(el.checked){
                miss=false
            }
        })
        setErrorRadio(miss)
        return !miss
    }

    const handleCLick=()=>{
        const advantagesV=validationAdvantages()
        const checkboxV=validationCheckbox()
        const radioV=validationRadio()
        if(advantagesV&&checkboxV&&radioV){
            handleStep(2)
        }

    }
    useEffect(()=>{
        const _advantages=advantages.map(
            ()=>(
                    {
                     isError:false
                    }
            )
        )
        setErrorAdvantages(
            _advantages
        )
    },[advantages])
    return (
        <div>
            <InputGroup data={advantages} error={errorAdvantages} editData={editaAdvantages}/>
            <div style={{height:24}}/>
            <CheckGroup isError={errorCheckbox} data={checkbox} editData={editCheckbox}/>
            <div style={{height:24}}/>
            <RadioGroup isError={errorRadio} data={radio} editData={editaRadio}/>
            <div className={s.button_group}>
                <Button id={"button-back"} outlined={true} onClick={()=>handleStep(0)} >Назад</Button>
                <Button id={"button-next"} outlined={false} onClick={handleCLick} >Далее</Button>
            </div>
        </div>
    );
};

export default Tab2;