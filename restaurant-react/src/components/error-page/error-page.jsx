import style from './error-page.module.css';

export default function ErrorPage() {
  return (
    <div className={style.error}>
      <h1>Page NOT found!</h1>
    </div>
  )
}