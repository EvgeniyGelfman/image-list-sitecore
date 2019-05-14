import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import chai, {expect, assert} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

import axios from 'axios';

import getImages from '../apis/api-unsplash';
import App from './App';
import {SEARCH_TERM} from '../constants';

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.use(chaiAsPromised);

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('App renders Layout', () => {
        const wrapper = shallow(<App />);

        expect(wrapper).to.have.descendants('ImageList');
    });

    it('resolves on success response', async () => {
        const resolved = new Promise((r) => r({ data: [] }));
        sandbox.stub(axios, 'get').returns(resolved);

        return assert.isFulfilled(getImages(SEARCH_TERM));
    });

    it('rejects on network error', async () => {
        const rejected = new Promise((res, rej) => rej(new Error('NETWORK ERROR')));
        sandbox.stub(axios, 'get').returns(rejected);

        return assert.isRejected(getImages(SEARCH_TERM));
    });
});
