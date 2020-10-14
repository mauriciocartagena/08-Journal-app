import '@testing-library/jest-dom';
import cloudinary from 'cloudinary'
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({ 
    cloud_name: 'dzbirb2q6', 
    api_key: '967521311645675', 
    api_secret: 'qZUI2_dOkBnJLmtttpFulmuuP9w' 
});


describe('Pruebas en fileUpload', () => {
   
    test('debe de cargar un archivo y retornar el URL', async ( done ) => {
       
        const resp =  await fetch('https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg');
        const blob = await resp.blob();

        const file =  new File([blob], 'foto.png');
        const url  =  await fileUpload( file );

        expect( typeof url ).toEqual('string');
        
        // Borrar imagen por ID
        const segments =  url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');

        cloudinary.v2.api.delete_resources(imageId, {}, ()=>{
            done();
        });

    });

    test('debe de retonar un error', async () => {
       
        const file =  new File([], 'foto.png');
        const url  =  await fileUpload( file );

        expect( url ).toEqual(null);

    });
    
    
});
