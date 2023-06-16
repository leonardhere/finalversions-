import React, {FC} from 'react';
import s from "./ErrorSide.module.css"
interface IErrorSide{
    error:string;
    isError:boolean

}
const ErrorSide:FC<IErrorSide> = ({error,isError}) => {
    return (
        <div className={s.error_side}>
            {error}
        </div>
    );
};

export default ErrorSide;