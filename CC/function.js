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

generarLista();

function generarLista(){

html="";
for (let index = 0; index < data.dog.length; index++) {
    html+=`<li value=${index}>  ${data.dog[index].name}</li> `;    
}
document.getElementById("lista").innerHTML=html;


}

document.getElementById("lista").addEventListener("click", function(e){

    html=`<img src=${data.dog[e.target.value].image}><br> 
          <h1> ${data.dog[e.target.value].name}</h1> 
          <h1> ${data.dog[e.target.value].nclicks}</h1>  `;

    document.getElementById("dog").innerHTML=html;
})




