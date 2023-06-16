import React, { FC} from 'react';
import s from "./CheckGroup.module.css"
import completed_icon from "../../assets/image/completed_icon.png"
import {ICheckbox} from "../../store/reducers/formSlice";
interface ICustomCheckBox{
    checked:boolean;
    label:number;
    editData:(index:number)=>void;
    index:number;
    isError:boolean;
}
const CustomChekBox:FC<ICustomCheckBox>=({checked,label,editData,index,isError})=>{


    const handleClick=()=>{
        editData(index)
    }

    return(
        <div className={s.custom_checkbox_wrapper}>
            <div
                id={`field-checkbox-group-options-${index}`}
                style={{borderColor:isError?"red":"rgba(0, 0, 0, 0.16)"}}
                className={checked?s.custom_checkbox_active: s.custom_checkbox}
                onClick={handleClick}
            >
                {checked&&<img src={completed_icon} alt={"#"}/>}
            </div>
            <div>{label}</div>
        </div>
    )
}
interface ICheckGroup {
    data:ICheckbox[];
    editData:(index:number)=>void;
    isError:boolean;
}
const CheckGroup:FC<ICheckGroup> = ({data,editData,isError}) => {





    return (
        <div>
            <div>
                Checkbox group
            </div>
            <div className={s.check_body}>
                {data.map(
                    (el,index)=>(
                        <CustomChekBox key={index} isError={isError} label={el.label} checked={el.checked} index={index} editData={editData}/>
                    )
                )}
            </div>
        </div>
    );
};

export default CheckGroup;