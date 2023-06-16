import React, {FC } from 'react';
import InputMask from 'react-input-mask';
import s from "./InputWithLabel.module.css"
import ErrorSide from "../ErrorSide/ErrorSide";

export enum TypeEnum{
    Number = "number",
    Text = "email",
}


interface  IInputWithLabel {
    label: String;
    type: TypeEnum;
    data:any;
    editData:(data:string)=>void;
    error:string;
    isError:boolean;
    id:string;
    //
}

const InputWithLabel:FC<IInputWithLabel> = ({label,type,data,editData,error,isError,id}) => {


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        editData(event.target.value);
    };
    return (
        <div className={s.input_label}>
            <div className={s.label_text}>
                {label}
            </div>
            {type===TypeEnum.Number
             ?<InputMask
                    mask={"+7 (999) 999-99-99"}
                    placeholder="+7"
                    value={data}
                    style={{borderColor:isError?"red":"rgba(0, 0, 0, 0.16)"}}
                    onChange={handleInputChange}
                    id={id}
                />
             :<input
                    id={id}
                 value={data}
                 style={{borderColor:isError?"red":"rgba(0, 0, 0, 0.16)"}}
                 onChange={handleInputChange}
              />
            }
            <ErrorSide error={error} isError={isError} />
        </div>
    );
};

export default InputWithLabel;