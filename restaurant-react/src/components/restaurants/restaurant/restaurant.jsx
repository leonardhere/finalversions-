import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import { loadCurrentRestaurantProducts } from '../../../redux/actions/action';
import { currentRestaurantIdSelector } from '../../../redux/features/currentRestaurant';
import {
  averageRatingSelector,
  restaurantByIdSelector
} from '../../../redux/selectors';
import Menu from '../../menu';
import Rate from '../../rate';
import Reviews from '../../reviews/reviews';
import style from './restaurant.module.css';

function Restaurant(
  {
    currentRestaurantId,
    loadCurrentRestaurantProducts,
    restaurant,
    averageRating
  }
) {

  useEffect(() => {
    loadCurrentRestaurantProducts(currentRestaurantId);
  }, [currentRestaurantId])

  return (
    <div className={style.restaurant}>
      <h3>{restaurant.name}</h3>
      {!!averageRating && <Rate rating={averageRating} />}
      <div className={style.switcher}>
        <NavLink
          to={`/restaurants/${restaurant.id}/menu`}
          activeClassName={style.active}
        >
          Menu
        </NavLink>
        <NavLink
          to={`/restaurants/${restaurant.id}/reviews`}
          activeClassName={style.active}
        >
          Reviews
        </NavLink>
      </div>
      <Switch>
        <Route path='/restaurants/:restId/menu'>
          <Menu menu={restaurant.menu} />
        </Route>
        <Route path='/restaurants/:restId/reviews'>
          <Reviews restaurantId={restaurant.id} />
        </Route>
        <Route path='/restaurants/:restId'>
          <Menu menu={restaurant.menu} />
        </Route>
      </Switch>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    currentRestaurantId: currentRestaurantIdSelector(state),
    restaurant: restaurantByIdSelector(state, props),
    averageRating: averageRatingSelector(state, props)
  }
}

export default connect(mapStateToProps, { loadCurrentRestaurantProducts })(Restaurant);
