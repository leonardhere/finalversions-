import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Product from './product';

import { restaurants } from '../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const product = restaurants[0].menu[0];

describe('Product', () => {
  it('should be rendered', () => {
    const wrapper = mount(<Product product={product}/>)
    const productEl = wrapper.find('[data-test="product"]');

    expect(productEl.length).toBe(1);
  });

  it('must be 0 on initialization', () => {
    const wrapper = mount(<Product product={product}/>)
    const amountEl = wrapper.find('[data-test="product-amount"]');

    expect(amountEl.text()).toBe('Amount: 0');
  });

  it('the value should no change when the decrement function is called', () => {
    const wrapper = mount(<Product product={product}/>)
    const btnDecrementEl = wrapper.find('[data-test="product-decrement"]');
    const amountEl = wrapper.find('[data-test="product-amount"]');
    btnDecrementEl.simulate('click');

    expect(amountEl.text()).toBe('Amount: 0');
  });

  it('should fetch data', () => {
    const func = jest.fn();
    mount(<Product product={product} fetchData={func}/>);
    
    expect(func).toBeCalledWith(product.id);
  });
})