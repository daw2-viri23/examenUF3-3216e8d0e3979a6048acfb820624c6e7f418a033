

export const formulario = {
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

            <button type="submit" class="btn btn-primary mt-3">Añadir al pedido</button>
        </form>
        </div>
        <div class="col-6">
            <h3>Mahou cinco estrellas</h3>
            <p class="fs-5">Una cerveza dorada, de espuma cremosa y consistente, con un sabor característico, moderado y fino, de aroma afrutado.</p>
            <img src="./imagenes/botella-frente.png" alt="mahou" class="col-2">
        </div>
       </div> 
    `
}