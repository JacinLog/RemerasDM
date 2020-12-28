const header = {
    template:`
    <div>
    <ul class="nav bg-light justify-content-between ">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i class="fas fa-tshirt"></i> DM</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="/#/home">Inicio</a>
                <a class="dropdown-item" href="/#/home/info">Acerca de nosotros</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/#/home/blog">Blog</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-shopping-bag"></i> Tienda</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Administración</a>
        </li>
        <li class="nav-item dropdown float-right">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Perfil</a>
            <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">Iniciar Sesion</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Registrarse</a>
            </div>
        </li>
    </ul>
</div>
    `,

    data: () => ({
        usuario:{
            logueado:false
        },
        menu:[
            {
                nombre:"Principal",
                oculto: true,
                submenu:[
                    {
                        nombre:"Inicio",
                        attr1:"/#/home/"
                    },
                    {
                        nombre:"Info",
                        attr1:"/#/home/info"
                    },
                    {
                        nombre:"Iniciar sesion",
                        attr1:"/#/home/identificacion"
                    },
                    {
                        nombre:"Perfil",
                        attr1:"/#/home/perfil"
                    }
                ]
            },
            {
                nombre:"Tienda",
                oculto: true
            },
            {
                nombre:"Administración",
                oculto: true
            }
        ]
    }),
    computed(){
        return{
        }
    }
}
const footer = {
    template:`
    
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link text-decoration-none text-white" href="#">Insta <i class="fab fa-instagram"></i> gram</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-decoration-none text-white" href="#"><i class="fab fa-facebook-square"></i> acebook </a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-decoration-none text-white"><i class="fas fa-hashtag"></i> RemerasDM</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-decoration-none text-white" href="#"><i class="fab fa-twitter"></i> Twitter</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-decoration-none text-white" href="#"><i class="far fa-envelope-open"></i> Mail</a>
  </li>
</ul>
    
    `
}
export default{
    header,
    footer
}