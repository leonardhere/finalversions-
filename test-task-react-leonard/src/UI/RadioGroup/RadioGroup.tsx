import React, { FC} from 'react';
import s from "./RadioGroup.module.css"
import {IRadio} from "../../store/reducers/formSlice";
interface ICustomCheckBox{
    checked:boolean;
    label:number;
    index:number;
    editData:(index:number)=>void;
    isError:boolean;
}
const CustomRadio:FC<ICustomCheckBox>=({checked,label,editData,index,isError})=>{


    const handleClick=()=>{
        editData(index)
    }

    return(
        <div className={s.custom_radio_wrapper}>
            <div
                id={`field-radio-group-options-${index}`}
                className={checked?s.custom_radio_active: s.custom_radio}
                onClick={handleClick}
                style={{borderColor:isError?"red":"rgba(0, 0, 0, 0.16)"}}
            >
                {checked&&<div className={s.point}></div>}
            </div>
            <div>{label}</div>
        </div>
    )
}

interface IRadioGroup{
    data:IRadio[],
    editData:(index:number)=>void;
    isError:boolean;
}
const RadioGroup:FC<IRadioGroup> = ({data,editData,isError}) => {



    return (
        <div>
            <div>
                Radio group
            </div>
            <div className={s.check_body}>
                {data.map(
                    (el,index)=>(
                        <CustomRadio key={index} isError={isError} label={el.label} checked={el.checked} index={index} editData={editData}/>
                    )
                )}
            </div>
        </div>
    );
};

export default RadioGroup;