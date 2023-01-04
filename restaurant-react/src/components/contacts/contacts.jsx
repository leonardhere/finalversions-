import cn from 'classnames';

import style from './contacts.module.css';


export default function Contacts() {
  return (
    <div className={cn(style.contacts)}>
      <a href="https://github.com/y-dubovitsky" target="_blank">Мой профиль на GitHub</a>
      <h3>Электронная почта:</h3>
      y.dubovitsky@gmail.com
      </div>
  )
}