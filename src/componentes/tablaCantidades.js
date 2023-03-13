import { v4 as uuidv4 } from 'uuid';

export const miTabla = {
    usuarios: [
            { 
                id:uuidv4(),
                nombre: "Estrella Galicia", 
                cantidad: 1 
            },
            { 
                id:uuidv4(),
                nombre: "Mahou Cinco Estrellas", 
                cantidad: 3 
            },
            { 
                id:uuidv4(),
                nombre: "San Miguel Especial", 
                cantidad: 5 
            }
    ],
    pintaTabla: (usuarios)=>{

        var html= `
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Nombre</th>
                </tr>
                </thead>
                <tbody>
    `
    for(let indice=0;indice<miTabla.usuarios.length;indice++){
        //con la ruta podremos agregar nuestros datos en la tabla del html utilizando el "${}" 
        html+= `
            <tr id="birraid${miTabla.usuarios[indice].id}">
                <td>${miTabla.usuarios[indice].cantidad}</td>
                <td>${miTabla.usuarios[indice].nombre}</td>
                <td><button type="button" class="editar btn btn-primary ml-5 " data-id="${miTabla.usuarios[indice].id}">✏️</button></td>
                <td><button type="button" class="borrar btn btn-danger" data-id="${miTabla.usuarios[indice].id}">🗑️</button></td>
            </tr>
    
            `
        }
            html+=`
                </tbody>
            </table>
        `
        return(html)
        //con el return devolvemos la variable html con su codigo, y lo mostrara en la terminal.
        
    },

    borrar: ()=>{
        document.querySelector('main').addEventListener("click", (event)=>{
            if(event.target.classList.contains('borrar')){
                var idUsuario = '#birraid' + event.target.dataset.id
                console.log('has hecho click en borrar al usuario ' + idUsuario)
                document.querySelector(idUsuario).classList.add('d-none')

            }
            
        })
    },
    editar: ()=>{
        document.querySelector('main').addEventListener("click", (event)=>{
            if(event.target.classList.contains('editar')){
                var idUsuario = event.target.dataset.id
                console.log('has hecho click en editar al usuario ' + idUsuario)
            }
            
        })
    }
}

/*
template: `
    <div class="container">
        <h4>Esto es lo que te has tomado ya...</h4>
        <div class="row">
    <div class="col-12 d-flex justify-content-center mt-3">
    <table class="table">
        <thead>
        <tr>
            <th>Cerveza</th>
            <th>Cantidad</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr id="userid1">
            <td>Pilsner</td>
            <td>2</td>
            <td>
            <button type="button" class="btn btn-primary">Editar</button>
            <button type="button" class="borrar btn btn-danger">Eliminar</button>
            </td>
        </tr>
        <tr id="userid2">
            <td>IPA</td>
            <td>3</td>
            <td>
            <button type="button" class="btn btn-primary">Editar</button>
            <button type="button" class="borrar btn btn-danger">Eliminar</button>
            </td>
        </tr>
        <tr id="userid3">
            <td>Stout</td>
            <td>1</td>
            <td>
            <button type="button" class="editar btn btn-primary">Editar</button>
            <button type="button" class="borrar btn btn-danger">Eliminar</button>
            </td>
        </tr>
        </tbody>
    </table>
   </div> 
   </div>
    
    </div>
    `,
    script: ()=>{
        document.querySelector('main').addEventListener("click", (event)=>{
            if(event.target.classList.contains('borrar')){
                var idUsuario = '#userid' + event.target.dataset.id
                console.log('has hecho click en borrar al usuario ' + idUsuario)
                document.querySelector(idUsuario).classList.add('d-none')

            }
            
        })
    }

*/ 