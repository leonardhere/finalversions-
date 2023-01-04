import { Component } from 'react';
import Product from '../product/product';

import style from './menu.module.css';

class Menu extends Component {

  render() {
    const { menu } = this.props;

    return (
      <div className={style.menu}>
        {
          menu.map((id) => {
            return <Product key={id} id={id} />
          })
        }
      </div>
    )
  }
}

export default Menu;