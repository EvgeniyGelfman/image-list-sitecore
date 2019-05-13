import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';

import ImageList from './ImageList';

chai.use(chaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });

describe('Image List', () => {
    it('renders images with prepopulated array', () => {
        const images = [
            {
                alt_description: "bee on pink petaled flower",
                url: {
                    regular: "https://images.unsplash.com/photo-1535724461397-8ca2ab631767?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcxMDY1fQ"
                },
                id: 1
            },
            {
                alt_description: "white and black boats on seashore",
                url: {
                    regular: "https://images.unsplash.com/photo-1534683888815-c51f30be88f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcxMDY1fQ"
                },
                id: 2
            }
        ];

        const imageList = shallow(
            <ImageList
                images={images}
            />);

        expect(imageList).to.have.className('image-list');
        expect(imageList).to.have.exactly(2).descendants('ImageDetail');

        expect(imageList.find('ImageDetail').first())
            .to.have.prop('alt');
    });
});
