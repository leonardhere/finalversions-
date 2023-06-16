import React, {FC, useEffect, useState} from 'react';
import s from "./ProgressBar.module.css"
import completed_icon from "../../assets/image/completed_icon.png"

enum State{
    Active="Current",
    Completed="Completed",
    Inactive="Inactive"
}
const ChekPoint:FC<{completed:State}>=({completed})=>{
    return(
        <div className={s.chekpoint_wrapper} >
            {completed===State.Completed
                ?<div className={s.chekpoint}>
                    <img src={completed_icon} alt={"#"}/>
                </div>
                :completed===State.Active
                ?<div className={s.chekpoint}>
                    <div className={s.point}></div>
                </div>
                :<div className={s.chekpoint_inactive}>
                </div>
            }
        </div>
    )
}

const ProgressLine:FC<{active:boolean}>=({active})=>{
    return(
        <div  className={active?s.progress_line_active:s.progress_line_inactive}>

        </div>
    )
}



interface ICheckpointState{
    state: State
}

const checkpoint_state:Array<ICheckpointState>=[
    {state:State.Inactive},
    {state:State.Inactive},
    {state:State.Inactive}
]

const ProgressBar:FC<{step:number}> = ({step}) => {

    const [state,setState]=useState<Array<ICheckpointState>>(checkpoint_state)
    useEffect(()=>{
       let  newState=[...state];
       newState[step]={state:State.Active}
        for(let i=0;i<step;i++){
            newState[i]={state:State.Completed}
        }
        for(let i=step+1;i<state.length;i++){
            newState[i]={state:State.Inactive}
        }
        setState(newState)
        // eslint-disable-next-line
    },[step])
    return (
        <div className={s.progress_bar}>
            <div className={s.absolute}>
                <ProgressLine active={step>=1}/>
                <ProgressLine active={step>=2}/>
            </div>
            {state.map(
                (el,index)=>
                    <ChekPoint key={index} completed={el.state}/>
            )
            }
        </div>
    );
};

export default ProgressBar;