


import { formulario } from './componentes/formulario'
import { header } from './componentes/header'
import { miTabla } from './componentes/tablaCantidades'
import { home } from './vistas/home'


document.querySelector('header').innerHTML = header.template
document.querySelector('#formulario').innerHTML = formulario.template

miTabla.borrar()
home.script()
console.log(miTabla.usuarios);
miTabla.editar()
miTabla.agregar()
