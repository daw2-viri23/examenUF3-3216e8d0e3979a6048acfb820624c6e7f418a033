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

            <button type="submit" class="btn btn-primary mt-3">Enviar</button>
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
const miTabla = {
  template: `
    <table class="table">
        <thead>
        <tr>
            <th>Cerveza</th>
            <th>Cantidad</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Pilsner</td>
            <td>2</td>
            <td>
            <button type="button" class="btn btn-primary">Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
        <tr>
            <td>IPA</td>
            <td>3</td>
            <td>
            <button type="button" class="btn btn-primary">Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
        <tr>
            <td>Stout</td>
            <td>1</td>
            <td>
            <button type="button" class="btn btn-primary">Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
        </tbody>
    </table>
    `
};
document.querySelector("header").innerHTML = header.template;
document.querySelector("#formulario").innerHTML = formulario.template;
document.querySelector("#contenido").innerHTML = miTabla.template;
