import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import style from './rate.module.css';
import { useState } from 'react';

export default function Rate({ rating, handleRateChange }) {

  // Меняется ТОЛЬКО если у нас приходит функция, которая меняет рейтинг
  const [rate, setRate] = useState(undefined);

  return (
    <div>
      {
        [...Array(5)].map((_, idx) => {
          return <div
            key={idx}
            // Если функцию не передали в пропы!
            onClick={handleRateChange ? (() => {
              handleRateChange(idx + 1);
              setRate(idx + 1);
            })
              :
              (undefined)
            }
            className={!rate ?
              (idx < rating ? style.red : style.white)
              :
              (idx < rate ? style.red : style.white)}
          >
            <i><FontAwesomeIcon icon={faStar} /></i>
          </div>
        })
      }
    </div >
  )
}