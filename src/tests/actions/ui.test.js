import '@testing-library/jest-dom';
import { FinishLoading, removeError, setError, StartLoading } from '../../actions/ui';
import { types } from '../../types/types';

describe('Pruebas en ui-actions', () => {
   
    test('todas las acciones deben de funcionar', () => {
        
        const action = setError('HELP !!!!');

        expect( action ).toEqual({
            type:types.uiSetError,
            payload:'HELP !!!!'
        });

        const removeErrorAction = removeError();
        const StartLoadingAction = StartLoading();
        const FinishLoadingAction = FinishLoading();

        expect( removeErrorAction ).toEqual( {
            type:types.uiRemoveError
        });
        expect( StartLoadingAction ).toEqual( {
            type:types.uiStartLoading
        });
        expect( FinishLoadingAction ).toEqual({
            type:types.uiFinishLoading
        });

    });
    
});
 