import cn from 'classnames';

import style from './validation-pop-up.module.css';

export default function ValidationPopUp({ message }) {
  return (
    <div className={cn(style.validation)}>
      <h1>{message}</h1>
    </div>
  )
}