import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en AuthReducer', () => {
   
    test('debe de volver el Login', () => {
       
        const initialState = {};

        const action = {
            type:types.login,
            payload:{
                uid:'123',
                displayName:'Mauricio'
            }
        }
        const state = authReducer(initialState, action );

       expect( state ).toEqual({
                uid:'123',
                name:'Mauricio'
       });
        
    });

    test('Debe de volver el Logout', () => {
       
        const initialState = {
            uid:'123132fasfaf',
            name:'Mauricio'
        }
        
        const action = {
            type:types.logout
        }

        const state = authReducer( initialState, action );
        
        expect( state ).toEqual( {} );

    });
    test('debe de volver estado {}', () => {
       
        const initialState = {
            uid:'123132fasfaf',
            name:'Mauricio'
        }

        const state = authReducer( initialState, {
            type:types.null
        });

        expect( state ).toEqual( initialState );
        
    });
    
    
    
    
});
