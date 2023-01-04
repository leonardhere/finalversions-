import { useEffect } from 'react';
import { connect } from 'react-redux';
import { restaurantListSelector } from '../../redux/selectors';
import { Link } from 'react-router-dom';

import style from './navigation.module.css';

function Navigation({ restaurants, onRestaurantClick }) {

  return (
    <div className={style.navContainer}>
      <h1>Our Restaurants:</h1>
      <div className={style.navigation}>
        {
          restaurants.map(restaurant => {
            return (
              <Link
                key={restaurant.id}
                className={style.nav}
                style={{ backgroundImage: `url(${restaurant.image})` }}
                onClick={() => onRestaurantClick(restaurant.id)}
                to={`/restaurants/${restaurant.id}`}
              >
                <h2>{restaurant.name}</h2>
              </Link>
            );
          })
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => (
  {
    restaurants: restaurantListSelector(state)
  }
)

export default connect(mapStateToProps)(Navigation);