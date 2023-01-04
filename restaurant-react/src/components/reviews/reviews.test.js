import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

import { restaurants } from '../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should be render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    const reviewsEl = wrapper.find('[data-test="reviews"]');

    expect(reviewsEl.length).toBe(1);
  })
});