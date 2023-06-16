import React, {FC} from 'react';
import s from "./InputGroup.module.css"
import delete_icon from "../../assets/image/delete_icon.png"
import Button from "../Button/Button";
import plus_icon from "../../assets/image/plus_icon.png"
import {useAppDispatch} from "../../store/hooks/typedHook";
import {formActions} from "../../store/reducers/formSlice";
import {ErrorType} from "../../pages/form/tabs/Tab2";

interface ICustomInput{
    data:string;
    index:number;
    editData:(index:number, data:string)=>void;
    isError:boolean
}
const CustomInput:FC<ICustomInput>=({data,editData,index,isError})=>{

    const dispatch=useAppDispatch()
    const handleClick=()=> {
        dispatch(formActions.deleteAdvantages({index}))
    }

    return(
        <div className={s.custom_input}>
            <input
                id={`field-advatages-${index}`}
                style={{borderColor:isError?"red":"rgba(0, 0, 0, 0.16)"}}
                value={data}
                onChange={(e)=>editData(index, e.target.value)}
                placeholder={"Placeholder"}/>
            <img id={`button-remove-${index}`} onClick={handleClick} src={delete_icon} alt={"#"}/>
        </div>
    )
}

interface IInputGroup{
    data:string[];
    editData:(index:number, data:string)=>void;
    error: ErrorType[]
}
const InputGroup:FC<IInputGroup> = ({data,editData,error}) => {
    const dispatch=useAppDispatch()



    const handleClick=()=> {
        dispatch(formActions.addAdvantages())
    }

    return (
        <div className={s.input_group}>
            <div>Advantages</div>
            {data.map(
                (el,index)=>(
                    <CustomInput
                        key={index}
                        isError={error[index]?.isError||false}
                        data={el}
                        editData={editData}
                        index={index}/>
                )
            )}
            <div  style={{height:8}}/>
            <Button id={"button-add"} outlined={true} onClick={handleClick}>
                <img src={plus_icon} alt={"#"}/>
            </Button>
        </div>
    );
};

export default InputGroup;