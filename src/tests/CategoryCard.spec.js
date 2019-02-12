//Rathan

import React from 'react';
import {mount} from "enzyme";
import CartegoryCard from '../components/common/CategoryCard';
import {BrowserRouter} from 'react-router-dom';

describe('CartegoryCard Suite',() =>{
    let props;
     beforeEach(() => {
        props = {
            cardDetail: { "id": 1,  "name": "OnePlus 6t", imageUrl: "http://abc.jpg" }
        }
    })
    it('CartegoryCard Default test case', () =>{

        let wrapper = mount (
        <BrowserRouter>
            <CartegoryCard cardDetail={props.cardDetail}/>
        </BrowserRouter>);

        expect(wrapper.find('img').length).toBe(1);
        expect(wrapper.find('.card').length).toBe(1);

    })

})