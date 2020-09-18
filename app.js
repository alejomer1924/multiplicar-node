const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const {argv} = require('./config/yargs');
var colors = require('colors');
                    

//console.log(module);

//console.log(process.argv);

//let argv2 = process.argv;

let comando = argv._[0]; 

switch(comando){
    case 'listar': 
        listarTabla(argv.base,argv.limite).then(mensaje=>{
            console.log(mensaje);
        }).catch(err =>{
            console.log(err);
        })
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(mensaje =>{
         console.log(mensaje);
         }).catch(err=>{
             console.log(err);
        });
        
    break; 

    default: 
        console.log('Comando no reconocido');    
}

//console.log(argv); //argv de yargs


//let parametro = argv[2];
//let base = parametro.split('=')[1];




