import { login, logout } from "../../actions/auth";
import { types } from "../../types/types";

describe('Pruebas con las acciones de Auth', () => {
   
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
    
    
});
