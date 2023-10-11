/*
const hernanPromete = new Promise( (resolve, reject) => {
    resolve ('Hernan estudió juiciosamente JavaScript');
    //reject ('Hernan no cumplió su promesa de estudiar JavaScript');
});

hernanPromete()
    .then( (resultado) => {
        console.log(resultado);         // 'Hernan estudió juiciosamente JavaScript'
    }  )
    .catch(( err ) => {
        console.log( '>>>>>', err);      //'Hernan no cumplió su promesa de estudiar JavaScript'
    })
*/

const obtenerImagen = new Promise( ( resolve, reject) =>{
    const hayImagen = false;

    if(hayImagen) {
        resolve( 'Carga la imagen exitosamente' );
    } else {
        reject( 'El archivo esperado no ha cargado!' );
    }
} );

//Implementa la forma de resolver la promesa

obtenerImagen
.then( ( response ) => {
    console.log( response);
})
.catch( (error) => {
    console.log(error)
});