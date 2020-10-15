import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares)

const initState = {}

let store = mockStore(initState);

describe('Pruebas con las acciones de Auth', () => {

    beforeEach(()=>{
        store = mockStore( initState );
    })

   
    test('Login y logout deben de crear la acción respectiva', () => {
        
        const uid = '123132';
        const displayName = 'Mauricio';
        

        const loginAction = login( uid, displayName );
        
        const logoutAction = logout();

        expect( loginAction ).toEqual( {
            type :types.login,
            payload:{
                uid,
                displayName
            }
        } );
        expect( logoutAction ).toEqual( { type:types.logout } );    
        
    });

    test('debe de realizar el startLogout', async() => {
       
        await store.dispatch( startLogout() );

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type:types.logout
        });
        expect( actions[1] ).toEqual({
            type:types.notesLogoutCleaning
        });
        
    });
    test('should debe de iniciar startLoginEmailPassword', async() => {
       
        await store.dispatch( startLoginEmailPassword( 'test@gmail.com','123456' ) );

        const actions = store.getActions();

        expect( actions[1] ).toEqual({
            type:types.login,
            payload:{
                uid:'HTzqBWMKexTvBZUxb2E36GKIhyy1',
                displayName:null
            }
        })
        
    });
    
    
    
    
});
