import React, {FC, ReactNode} from 'react';
import s from "./Button.module.css"
interface IButton{
    children:ReactNode;
    outlined:boolean;
    onClick:Function;
    id:string
}
const Button:FC<IButton> = ({outlined,children,onClick,id}) => {


    return (
        <div id={id} onClick={()=>onClick()} style={{ background:outlined?"none":"#5558FA",color:outlined?"#5558FA":"#FFFFFF"}} className={s.button}>
            {children}
        </div>
    );
};

export default Button;