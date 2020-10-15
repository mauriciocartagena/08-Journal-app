import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { Sidebar } from '../../../components/journal/Sidebar';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';


jest.mock('../../../actions/notes',()=>({
    startNewNote:jest.fn()
}));
jest.mock('../../../actions/auth',()=>({
    startLogout:jest.fn()
}));


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid:'1',
        name:'Mauricio'
    },
    ui:{
        loading:false,
        msgError:null
    },
    notes:{
        notes:[],
        active:null
    }
}

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={ store } >
        <Sidebar />       
    </Provider>
);

describe('Pruebas en <Sidebar />', () => {
    
    test('debe de mostrarse correctamente', () => {
        //snapshot
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de llamar el startLogout', () => {
        // debe de llamar la acción de startLogout
        wrapper.find('.btn').prop('onClick')();
        expect( startLogout ).toHaveBeenCalled();

    });

    test('debe de llmar el startNewNote', () => {
       // debe de llamar la acción startNewNote
       wrapper.find('.journal__new-entry').prop('onClick')();
       expect( startNewNote ).toHaveBeenCalled();
        
    });
    
    
    

})
