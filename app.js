//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.listar();

        for (let tarea of listado) {
            console.log('====== Por Hacer ======'.green);
            console.log('Descripción: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrado(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('conando no reconocido');
}