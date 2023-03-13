(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style$1 = "";
const style = "";
const formulario = {
  template: `
       <div class="row form border bordered p-3 m-3 shadow">
        <h4>Selecciona tu cerveza y haz tu pedido</h4>
        <div class="col-6">
            <form class="" id="formularioRegistro">
            <div class="form-group mb-3">
                <label for="grupo">Nombre del grupo:</label>
                <input type="text" class="form-control" id="grupo" name="grupo">
            </div>
            <div class="form-group mb-3">
                <label for="mesa">Número de mesa:</label>
                <input type="number" class="form-control" id="mesa" name="mesa">
            </div>

            <div class="form-group mb-3">
                <label for="birra">Elige tu cerveza:</label>
                <select class="form-control" id="birra" name="birra">
                <option value="Mahou Cinco Estrellas">Mahou Cinco Estrellas</option>
                <option value="Estrella Galicia">Estrella Galicia</option>
                <option value="Alhambra Reserva 1925">Alhambra Reserva 1925</option>
                <option value="San Miguel Especial">San Miguel Especial</option>
                <option value="Damm Estrella">Damm Estrella</option>
                </select>
            </div>

            <div class="form-group mb-3">
                <label for="cantidad">¿Cuántas te traigo?:</label>
                <input type="number" class="form-control" id="cantidad" name="cantidad">
            </div>

            <button id="enviarForm" type="submit" class="btn btn-primary mt-3">Añadir al pedido</button>
        </form>
        </div>
        <div class="col-6">
            <h3>Mahou cinco estrellas</h3>
            <p class="fs-5">Una cerveza dorada, de espuma cremosa y consistente, con un sabor característico, moderado y fino, de aroma afrutado.</p>
            <img src="./imagenes/botella-frente.png" alt="mahou" class="col-2">
        </div>
       </div> 
    `
};
const header = {
  template: `<div class="container-fluid">
    <div class="row">
        <div class="col-12 mt-3 mb-3">
            <h4>Alumno: José Luis Viri Murillo</h4>
        </div>
    </div>
</div>`,
  script: () => {
    console.log("se ha inyectado el header");
  }
};
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = {
  randomUUID
};
function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
const miTabla = {
  usuarios: [
    {
      id: v4(),
      nombre: "Estrella Galicia",
      cantidad: 1
    },
    {
      id: v4(),
      nombre: "Mahou Cinco Estrellas",
      cantidad: 3
    },
    {
      id: v4(),
      nombre: "San Miguel Especial",
      cantidad: 5
    }
  ],
  pintaTabla: (usuarios) => {
    var html = `
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Nombre</th>
                </tr>
                </thead>
                <tbody>
    `;
    for (let indice = 0; indice < miTabla.usuarios.length; indice++) {
      html += `
            <tr id="birraid${miTabla.usuarios[indice].id}">
                <td>${miTabla.usuarios[indice].cantidad}</td>
                <td>${miTabla.usuarios[indice].nombre}</td>
                <td><button type="button" class="editar btn btn-primary ml-5 " data-id="${miTabla.usuarios[indice].id}">✏️</button></td>
                <td><button type="button" class="borrar btn btn-danger" data-id="${miTabla.usuarios[indice].id}">🗑️</button></td>
            </tr>
    
            `;
    }
    html += `
                </tbody>
            </table>
        `;
    return html;
  },
  borrar: () => {
    document.querySelector("main").addEventListener("click", (event) => {
      if (event.target.classList.contains("borrar")) {
        var idUsuario = "#birraid" + event.target.dataset.id;
        console.log("has hecho click en borrar al usuario " + idUsuario);
        document.querySelector(idUsuario).classList.add("d-none");
      }
    });
  },
  editar: () => {
    document.querySelector("main").addEventListener("click", (event) => {
      if (event.target.classList.contains("editar")) {
        var idUsuario = event.target.dataset.id;
        console.log("has hecho click en editar al usuario " + idUsuario);
      }
    });
  },
  agregar: () => {
    const enviarForm = document.querySelector("#enviarForm");
    console.log("boton", enviarForm);
    enviarForm.addEventListener("click", (event) => {
      var dadesUsuari = new Object();
      dadesUsuari.id = v4();
      dadesUsuari.cantidad = document.querySelector("#cantidad").value;
      dadesUsuari.nombre = document.querySelector("#birra").value;
      event.preventDefault();
      console.log("se ha hecho click en el boton de enviar formulario");
      console.log(dadesUsuari);
      miTabla.usuarios.push(dadesUsuari);
      console.log(miTabla.usuarios);
      let nuevoUsuario = `
                
            <tr id="userid1${dadesUsuari.id}" class="d-none">
                <td>${dadesUsuari.cantidad}</td>
                <td id="nick-tabla">${dadesUsuari.nombre}</td>
                <td><button type="button" class="editar btn btn-primary ml-5 " data-id="${dadesUsuari.id}">✏️</button></td>
                <td><button type="button" class="borrar1 btn btn-danger" data-id="${dadesUsuari.id}">🗑️</button></td>
            </tr>`;
      const tr = document.createElement("tr");
      tr.setAttribute("id", dadesUsuari.id);
      tr.innerHTML = nuevoUsuario;
      document.querySelector("tbody").append(tr);
    });
  }
};
const home = {
  template: `
       <div class="row">
                <div id="registro" class="col-12">
                </div> 
               <div class="col-8">
                    ${miTabla.pintaTabla()}
               </div> 
               
       </div> 
      
    `,
  script: () => {
    document.querySelector("#contenido").innerHTML = home.template;
  }
};
document.querySelector("header").innerHTML = header.template;
document.querySelector("#formulario").innerHTML = formulario.template;
miTabla.borrar();
home.script();
console.log(miTabla.usuarios);
miTabla.editar();
miTabla.agregar();
