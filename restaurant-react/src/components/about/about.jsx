import cn from 'classnames';

import style from './about.module.css';

export default function About() {
  return (
    <div className={cn(style.about)}>
      <h2>Моя реализация проекта после прохождения курса на https://learn.javascript.ru/</h2>
      <a href="https://learn.javascript.ru/courses/react" target="_blank" rel="noopener noreferrer">https://learn.javascript.ru/courses/react</a>
      <img src={process.env.PUBLIC_URL + '/certificate.jpg'} alt="" />
      <h2>Вопросы, предложения и претензии по качеству направляйте на почту</h2>
      <h4>y.dubovitsky@gmail.com</h4>
    </div>
  )
}