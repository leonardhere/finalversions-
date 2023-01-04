import { connect } from 'react-redux';
import {
  reviewByIdWithUserSelector,
} from '../../../redux/features/reviews';

import Loader from '../../loader/loader';

import Rate from '../../rate';

import style from './review.module.css';

function Review(props) {

  const { id, reviewWithUser } = props;

  if (!reviewWithUser) return <Loader />;

  const { text, rating, user } = reviewWithUser;

  return (
    <div
      className={style.reviewContainer}
      data-test="reviews"
    >
      <div className={style.review}>
        <div className={style.author}>
          <h4>Author: {user.name}</h4>
        </div>
        <div className={style.info}>
          <p>{text}</p>
          <Rate rating={rating} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    reviewWithUser: reviewByIdWithUserSelector(state, props),
  }
)

export default connect(mapStateToProps)(Review);
