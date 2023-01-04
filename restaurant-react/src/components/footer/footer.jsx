import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faVk,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import style from './footer.module.css';

export default function Footer() {
  return (
    <div className={style.footer}>
      <a className={style.up} href="#hero">
        <li>Up<i><FontAwesomeIcon icon={faArrowUp} /></i></li>
      </a>
      <div className={style.desContainer}>
        <div className={style.description}>
          <div className={style.logo}>
            <img src={process.env.PUBLIC_URL + '/logo100_120.png'} alt="" />
            <h3>Consegna del cibo</h3>
          </div>
          <ul>
            <li>
              <NavLink to="/restaurants"
                activeClassName={style.active}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"
                activeClassName={style.active}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts"
                activeClassName={style.active}
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq"
                activeClassName={style.active}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={style.social}>
          <ul>
            <li><i><FontAwesomeIcon icon={faTwitterSquare} /></i></li>
            <li><i><FontAwesomeIcon icon={faFacebookSquare} /></i></li>
            <li><i><FontAwesomeIcon icon={faInstagramSquare} /></i></li>
            <li><i><FontAwesomeIcon icon={faVk} /></i></li>
          </ul>
        </div>
      </div>
      <div className={style.down}>
        © 2000–{new Date().getFullYear()}, ООО «Consegna del cibo», official site
      </div>
    </div>
  )
}