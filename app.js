//arreglo que almacena los panes
const panes=[
    {
        nombre:"Moño",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan01.jpg",
        categoria:"dulce",
    },
    {
        nombre:"Espolvoredo",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan02.jpg",
        categoria:"blanco",
    },
    {
        nombre:"Bisquet",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan03.jpg",
        categoria:"dulce",
    },
    {
        nombre:"Bagguet",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan04.jpg",
        categoria:"dulce",
    },
    {
        nombre:"Pan Blanco",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan05.jpg",
        categoria:"blanco",
    },
    {
        nombre:"Cuernito",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan06.jpg",
        categoria:"dulce",
    },
    {
        nombre:"Flor",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan07.jpg",
        categoria:"blanco",
    },
    {
        nombre:"Borracho",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan08.jpg",
        categoria:"blanco",
    },
    {
        nombre:"Concha",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan09.jpg",
        categoria:"dulce",
    },
    {
        nombre:"Ajonjoli",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan10.jpg",
        categoria:"dulce",
    },
    {
        nombre:"Naranjo",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan11.jpg",
        categoria:"dulce",
    },
    {
        nombre:"Bolillo",
        texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, iure.",
        precio:15,
        imagen:"/img/pan12.jpg",
        categoria:"blanco",
    }
]
//variables
//variables de los botones
const todos= document.querySelector("#todos");
const dulce =document.querySelector("#dulce");
const blanco = document.querySelector("#blanco");

const productos=document.querySelector(".productos__grid");

// eventos
listaEventos();
function listaEventos(){
    dulce.addEventListener("click", filtrarDulce);
    blanco.addEventListener("click", filtrarBlanco);
    todos.addEventListener("click",()=>{
        crearPan(panes);
    } );
}
//funciones
function filtrarDulce(e) {
    e.preventDefault();
    const dulcePanes = panes.filter((pan) => pan.categoria === "dulce");
    crearPan(dulcePanes);
}
function filtrarBlanco(e) {
    e.preventDefault();
    const blancoPanes = panes.filter((pan) => pan.categoria === "blanco");
    crearPan(blancoPanes);
}
function crearPan(panesillo){
    limpiarHTML();
    panesillo.forEach(pan => {
        const {nombre,texto,precio,imagen,}=pan;
        const div=document.createElement("div");
        div.classList.add("producto");

        const grafico=document.createElement("div");
        grafico.classList.add("producto__grafico");

        const img=document.createElement("img");
        img.src=imagen;
        img.classList.add("producto__imagen");

        const contenido=document.createElement("div");
        const name =document.createElement("h3");
        name.textContent=nombre;
        name.classList.add("producto__nombre");

        const text=document.createElement("p");
        text.classList.add("producto__texto");
        text.textContent=texto;

        const price =document.createElement("p");
        price.classList.add("producto__precio");
        price.textContent=precio;

        contenido.appendChild(name);
        contenido.appendChild(text);
        contenido.appendChild(price);

        div.appendChild(grafico);
        div.appendChild(img);
        div.appendChild(contenido);
        
        productos.appendChild(div);

    });
}
function limpiarHTML(){
    // Elimina todos los elementos en productos aun generados con javascript o lo que hice de forma normal con html y css
    while(productos.firstChild){
        productos.removeChild(productos.firstChild);
    }
}