import cn from 'classnames';

import style from './faq.module.css';

export default function FAQ() {
  return (
    <div className={cn(style.faq)}>
      <h2>Какие основные технологии и библиотеки использовались при реализации проекта?</h2>
      <ol>
        <li>React и его экосистема.</li>
        <li>React Hooks, их отличия от стейта и lifecycle методов.</li>
        <li>Тестирования компонент с помощью Jest и Enzyme.</li>
        <li>Redux + Immutable.js.</li>
        <li>React-redux для связи компонентов с логикой.</li>
        <li>React для SPA: react-router и продвинутые API Реакта.</li>
        <li>Redux dev tools.</li>
        <li>Side-effects в Redux: создание и использование Middlewares.</li>
        <li>Получение данных от сервера.</li>
        <li>Асинхронные экшены с redux-thunk.</li>
        <li>React Context.</li>
        <li>React-router.</li>
        <li>Объедин react-router и Redux.</li>
        <li><h3>И многое другое =)</h3></li>
      </ol>
    </div>
  )
}