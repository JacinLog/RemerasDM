import allPages from './_index.js'


let _pages={
    Response404 : { template: '<h1>El verdadero 404</h1><h3>No se ha encontrado la url consultada</h3>' },
    home: {
        inicio: allPages.home.Inicio,
        informacion: allPages.home.Informacion,
    },
}

let _routes={
    'home':{
        'inicio': _pages.home.inicio,
        'info': _pages.home.informacion,
    }
}


let UrlSinHash = () => {
    return {
        currentApp(){
            let hash = window.location.hash;
            let AppRoute = hash;
            if(hash == "" || hash == "#/")
                AppRoute = "home";
            else
                AppRoute = hash.split('/')[1];
            
            return AppRoute;            
        },
        currentView(){
            let hash = window.location.hash;
            let ViewRoute = hash;
            if(hash == "" || hash == "#/")
                ViewRoute = "inicio";
            else
                ViewRoute = hash.split('/')[2];
            
console.log("Antes ",ViewRoute)
            //FALLA en algo? O una de dos: O quitás esta condición, o en todos los _route.(ambiente) pones un inicio
            if(ViewRoute == undefined || ViewRoute == "")
                ViewRoute = "inicio";
console.log("Despues ",ViewRoute)

            return ViewRoute;
        }
    }
}

export default {
    data(){
        return{
        currentApp: UrlSinHash().currentApp(),
        currentView: UrlSinHash().currentView()
     }
    }
    ,
    computed: {
        CurrentComponent(){

            let existe, ListadoRutas = Object.keys(_routes);
            existe = "_no";
            ListadoRutas.forEach((v)=>{
                if(v == this.currentApp)
                {
                    existe = v;
                    return false;
                }
            })

            console.log("this current APP : : : ", this.currentApp,existe)
            if(existe == "_no")
                return _pages.Response404
            let ListadoViews = Object.keys(_routes[existe])
            existe = "_no"
            ListadoViews.forEach((v)=>{
                if(v == this.currentView){
                    existe = v;
                    return false;
                }
            })

            console.log("this current View : : : ", this.currentView,existe)
            if(existe == "_no")
                return _pages.Response404;

            return _routes[this.currentApp][this.currentView]
        }
    },
    // lifeCycle 
    beforeCreated(){},created(){},
    beforeMounted(){},mounted(){

        window.onhashchange = () => {
            this.currentApp = UrlSinHash().currentApp();
            this.currentView = UrlSinHash().currentView();
        }

    },
    beforeUnmount(){},unmounted(){},
    beforeUpdate(){},
    render() {
        return Vue.h(this.CurrentComponent)
    },
    updated(){}
}