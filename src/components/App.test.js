import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';

import App from './App';

chai.use(chaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    it('App renders Layout', () => {
        const wrapper = shallow(<App />);

        expect(wrapper).to.have.descendants('ImageList');
    });
});
