import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom'

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

jest.mock('../../../actions/auth',()=>({

    startGoogleLogin:jest.fn(),
    startLoginEmailPassword:jest.fn()

}));


const middlewares = [thunk];
const mockStore = configureStore(middlewares)

const initState = {
    auth: {},
    ui:{
        loading:false,
        msgError:null
    }
}

let store = mockStore(initState);
// store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={ store } >
        <MemoryRouter>
            <RegisterScreen />       
        </MemoryRouter> 
    </Provider>
);

describe('Pruebas en <RegisterScreen />', () => {
   
    test('debe de mostrar correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de hacer el dispatch de la acción respectiva', () => {
       
        const emailField = wrapper.find('input[name="email"]');

        emailField.simulate('change',{
            target:{
                value:'',
                name:'email'
            }
        });

        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type:types.uiSetError,
            payload:'Email is not valid'
        });

        
        
    });
    
    
    
});
