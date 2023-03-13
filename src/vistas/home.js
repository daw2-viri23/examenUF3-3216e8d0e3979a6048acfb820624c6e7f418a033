import { miTabla } from '../componentes/tablaCantidades'

export const home = {
    template: `
       <div class="row">
                <div id="registro" class="col-12">
                </div> 
               <div class="col-8">
                    ${miTabla.pintaTabla()}
               </div> 
               
       </div> 
      
    `,
    script: ()=>{
        document.querySelector('#contenido').innerHTML = home.template
    }
}