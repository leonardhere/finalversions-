import React, {ChangeEvent, FC} from 'react';
import s from "./CustomArea.module.css";

interface ICustomArea{
    text:string;
    onChange:(event:ChangeEvent<HTMLTextAreaElement>)=>void;
    isError:boolean;
}
const CustomArea:FC<ICustomArea> = ({text,onChange,isError}) => {




    return (
        <div className={s.custom_area}>
            <div>About</div>
            <div className={s.area_wrapper}>
                <textarea
                    id={"field-about"}
                    style={{borderColor:isError?"red":"rgba(0, 0, 0, 0.16)"}}
                    value={text}
                    onChange={onChange}
                    placeholder={"Placeholder"}
                />
                <div
                    style={{color:isError?"red":"rgba(0, 0, 0, 1)"}}
                    className={s.counter}
                >
                    {text.replace(/\s/g, '').length}/200
                </div>
            </div>

        </div>
    );
};

export default CustomArea;