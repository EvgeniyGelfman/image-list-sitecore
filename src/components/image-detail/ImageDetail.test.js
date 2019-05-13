import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';

import ImageDetail from './ImageDetail';

chai.use(chaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });

describe('Image Detail', () => {
    it('renders image', () => {
        const imageSrc = "https://images.unsplash.com/photo-1535724461397-8ca2ab631767?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcxMDY1fQ";
        const alt =  "bee on pink petaled flower";

        const imageDetail = shallow(
            <ImageDetail
                imageSrc={imageSrc}
                alt={alt}
            />);

        expect(imageDetail.find('figure')).to.exist;
        expect(imageDetail.find('img')).to.have.attr('src', imageSrc);
        expect(imageDetail.find('figcaption')).to.have.text(alt);
    });
});
