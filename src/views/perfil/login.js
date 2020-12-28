// import registrarse from '../../components/perfil_registrarse.js'
// import identificarse from '../../components/perfil_identificarse.js'
/**
 * 
 *  TODO: poner la clase active si en propiedades entra selected ("signup" || "login") 
 *  TODO: crear los componentes, en todo caso lo vamos a utilizar en otra parte de la aplicacion por si quiere comprar y loguearse en el momento
 * 
 */
export default{
    template: `
<div class="d-flex justify-content-center pt-5">
  <div class="col-5">
    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Registrarse</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Iniciar Sesion</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
    </div>
  </div>
</div>
    
    `,
    // components:{
    //     registrarse,
    //     identificarse
    // }
}