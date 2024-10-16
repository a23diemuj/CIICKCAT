




 

 import { createApp, ref , reactive} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'



 createApp({

 setup() {

 const message = ref('Hello Vue!')

 const llista = reactive({gats:[{nom:"garfield"}, {nom:"minino"}, {nom:"gat3"}]})

 const visible = ref(true);

 const url= ref('https://www.institutpedralbes.cat/wp-content/uploads/2021/05/logo.jpg')

 

 function saluda(id){

 alert(`El gat ${this.llista.gats[id].nom} diu hola`)

 }



 return {

 message, llista, saluda, visible, url

 }

 }

 }).mount('#appVue')







/*

let data = {
    dogActive: 0,
    dog: [
        { name: "doggy",  image: "img/dog1.jpeg", nclicks: 0 },
        { name: "capi",  image: "img/dog2.jpeg", nclicks: 0 },
        { name: "furus",  image: "img/dog3.jpeg", nclicks: 0 },
        { name: "bobi",  image: "img/dog4.jpeg", nclicks: 0 },
        { name: "maxi", image: "img/dog5.jpeg", nclicks: 0 }
    ]
};


let model=  {

   init: function(){
    return data;

   },

   chance: function(a){
    data.dogActive=a;

   },

   add: function(a){
    data.dog[a].nclicks++;

   },
   clickActual:function(a){

    return data.dog[a].nclicks;
   }







};
let controller={

    init:function(){


    view.init();


    },

    datos:function () {
        return model.init();
    },

    actual:function(){
       let datos=model.init();

       let obj={
        actual: datos.dogActive,
        dog :datos.dog[datos.dogActive]

       }
       return obj;

    },

    cambiarActual:function(a){

        model.chance(a);

    },
    aumentarClicks:function(a){

        model.add(a);

    },
    clickActual:function(a){
    return model.clickActual(a);


    }




};
let view={

    init:function(){

         view.pintarLista();
         view.pintarActual();
        

         document.getElementById("lista").addEventListener("click", function(e){

            controller.cambiarActual(e.target.value);
            view.pintarActual();
        
            
            
        })

        document.getElementById("dog").addEventListener("click", function(e){

    
    
            if(e.target.tagName=="IMG"){
              
             controller.aumentarClicks(e.target.id);   
                
             view.clickActual(e.target.id);   
            
        
        }
        
        })





    },

    pintarLista:function(){

    let lista = controller.datos(); 
    html="";
    for (let index = 0; index < lista.dog.length; index++) {
    html+=`<li value=${index}>  ${lista.dog[index].name}</li> `;    
    }
    document.getElementById("lista").innerHTML=html; 

    },

    pintarActual:function(){
    let dogActual = controller.actual(); 
    

    let actual= dogActual.actual;
    let dog=dogActual.dog;

    html=`<img id=${actual} src=${dog.image}><br> 
          <h1> ${dog.name}</h1> 
         <h1 id=nclick> ${dog.nclicks} </h1> `;
   
    document.getElementById("dog").innerHTML=html;    

    },
    clickActual:function(a){
        actual=controller.clickActual(a);

        document.getElementById("nclick").innerHTML=actual;
    }

};

controller.init();



*/