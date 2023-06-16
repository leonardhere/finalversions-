import React, { FC, useState} from 'react';
import s from "./Select.module.css"
import {Sex} from "../../store/reducers/formSlice";
import select_icon from "../../assets/image/select_icon.png"
import ErrorSide from "../ErrorSide/ErrorSide";
interface ISelect{
    data:Sex;
    editData:(sex:Sex)=>void;
    error:string;
    isError:boolean;
    id:string;
}
const Select:FC<ISelect> = ({data,editData,error,isError,id}) => {

    const [isSelected,editSelected]=useState<boolean>(false)
    const handleOptionChange = (value : Sex) => {
        editData(value);
        editSelected(false);
    };

    return (
        <div className={s.custom_select}>
            <div>Sex</div>
            <div
                id={id}
                tabIndex={0}
                onBlur={()=>editSelected(false)}
                onClick={()=>editSelected(s=>!s)}
                style={{borderColor:isError?"red":"rgba(0, 0, 0, 0.16)"}}
                className={s.selected_option}
            >
                {data===Sex.empty?"Не выбрано":data}
                <img src={select_icon} alt={"#"}/>
            </div>
            {isSelected
             &&<ul className={s.options_list}>
                <li className={s.option} onMouseDown={()=>handleOptionChange(Sex.man)}>man</li>
                <li className={s.option} onMouseDown={()=>handleOptionChange(Sex.woman)}>woman</li>
            </ul>}
            <ErrorSide error={error} isError={isError}/>
        </div>
    );
};

export default Select;