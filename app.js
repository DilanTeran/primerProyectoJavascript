const contenedor = document.querySelector(".flex-container")

function crearLlaves(nombre,modelo,precio){
    img= "<img class='imagen' src='llave.png'<br>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

let documentFragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++){
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    
    let llave = crearLlaves(`Llave ${i}`,`Modelo ${modeloRandom}`,precioRandom)
    
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modeloRandom
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`)
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);
