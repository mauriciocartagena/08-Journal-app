import configureStore from 'redux-mock-store' ;//ES6 modules
import thunk from 'redux-thunk';

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { JornalEntry } from '../../../components/journal/JornalEntry';
import { activeNote } from '../../../actions/notes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {}

let store = mockStore(initState);
store.dispatch = jest.fn();

const nota = {
    id:10, 
    date:0,
    title:'Hola',
    body:'Mundo',
    url:'https://algunlugar.com/foto.jpg'
}

const wrapper = mount( 
    <Provider store={ store } >
        <JornalEntry { ...nota } />       
    </Provider>
);

describe('Pruebas en <JornalEntry />', () => {
    
    test('debe de mostrarse correactamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('debde de activar la nota', async () => {
        
        wrapper.find('.journal__entry').prop('onClick')();

        expect( store.dispatch ).toHaveBeenCalledWith(
            activeNote( nota.id, { ...nota } )
        );

    })
    
    
})
