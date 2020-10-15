import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import { firebase } from '../../firebase/firebase-config';

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from '@testing-library/react';

jest.mock('../../actions/auth',()=>({

    login:jest.fn()

}));


const middlewares = [thunk];
const mockStore = configureStore(middlewares)

const initState = {
    auth: {},
    ui:{
        loading:false,
        msgError:null
    },
    notes:{
        notes:[],
        active:{
            id:'ABC',
            
        }
    }
}

let store = mockStore(initState);
store.dispatch = jest.fn();




describe('Pruebas en <AppRouter/>', () => {
   
    test('debe de llamar el login si estoy authenticado', async() => {
       
        let user;

        await act( async ()=>{

            const userCred = await firebase.auth().signInWithEmailAndPassword( 'test@gmail.com', '123456' );
            user = userCred.user;

            const wrapper = mount( 
                <Provider store={ store } >
                    <MemoryRouter>
                        < AppRouter/>       
                    </MemoryRouter> 
                </Provider>
            );
        })
        
        expect( login ).toHaveBeenCalledWith('HTzqBWMKexTvBZUxb2E36GKIhyy1', null);
    });

    
});
