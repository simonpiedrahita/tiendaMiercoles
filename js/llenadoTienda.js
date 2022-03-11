//creando un arreglo de objetos 
let productos =[
    {
        nombre:"Afiche de recompenza Monkey D luffy",
        precio:10000,
        descripcion:"cartel de se busca de Monkey D luffy con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_Luffy.png'
        
    },
    {
        nombre:"Afiche de recompenza Roronoa Zoro",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_zoro.jpg'
    },    
    {
        nombre:"Afiche de recompenza Sanji Vinsmoke ",
        precio:10000,
        descripcion:"cartel de se busca de Sanji Vinsmoke  con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_sanji.jpg'
    },    
    {
        nombre:"Afiche de recompenza Usopp",
        precio:10000,
        descripcion:"cartel de se busca de Usopp con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_usopp.jpg'
    },    
    {
        nombre:"Afiche de recompenza Tony Tony Chopper",
        precio:10000,
        descripcion:"cartel de se busca de Tony Tony Chopper con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_chopper.jpg'
    },    
    {
        nombre:"Afiche de recompenza Brook",
        precio:10000,
        descripcion:"cartel de se busca de Brook con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_brook.jpg'
    }, 
    {
        nombre:"Afiche de recompenza Nami",
        precio:10000,
        descripcion:"cartel de se busca de Nami con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_nami.jpg'
    }, {
        nombre:"Afiche de recompenza Nico Robin",
        precio:10000,
        descripcion:"cartel de se busca de Nico Robin con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_robin.jpg'
    }, 
    {
        nombre:"Afiche de recompenza Franky",
        precio:10000,
        descripcion:"cartel de se busca de Franky con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_franky.jpg'
    },{
        nombre:"Afiche de recompenza Jimbe",
        precio:10000,
        descripcion:"cartel de se busca de Jimbe con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_jimbe.jpg'
    },  
    /*
    {
        nombre:"Camiseta de Luffy",
        precio:10000,
        descripcion:"cartel de se busca de monkey D luffy con recompenza ",
        cantidad: 50,
        
        
    },
    {
        nombre:"Camiseta de Zoro",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50,
        
    },    
    {
        nombre:"Camiseta de Sanji",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50
    },    
    {
        nombre:"Camiseta de Usopp",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50
    },    
    {
        nombre:"Camiseta de Chopper",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50
    },    
    {
        nombre:"Camiseta de Brook",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50
    }, 
    {
        nombre:"Camiseta de Nami",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50
    }, {
        nombre:"Camiseta de Robin",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50
    } 
    */
]

console.log(productos);

//1. creo una variable para almacenar la base sobre la cual voy a pintar
let fila=document.getElementById("fila")
//for each para pintar la informacion de los productos 
productos.forEach(function (producto){

    console.log(producto.nombre)
    console.log(producto.descripcion)
    console.log(producto.precio)
    console.log(producto.foto)

//2.pintado de etiquetas
    //div con la clase col 
    let columna = document.createElement("div")
     //agregar clases a las etiquetas
     columna.classList.add("col")
    let card = document.createElement("div")
   
    //agregar clases a las etiquetas
    card.classList.add("card")
    card.classList.add("h-100")
    //let cardContent =document.createElement("div")
    

    //img con la clase card-img-top
    
    cardImg = document.createElement("img")
    cardImg.classList.add("card-img-top")
    cardImg.src=producto.foto

    
        
    let cardTittle=document.createElement("h5")
    cardTittle.classList.add("card-tittle")
    cardTittle.textContent=producto.nombre

    let cardText=document.createElement("p")
    cardText.classList.add("card-text")
    cardText.textContent=producto.descripcion

    //boton de la tarjeta
    
    let cardButton=document.createElement("button")
    cardButton.classList.add("btn")
    cardButton.style.marginBlock
    cardButton.classList.add("btn-primary")
    cardButton.textContent="mas"
    //cardButton.textContent=producto.descripcion


//3. padres e hijos o appenddChild's
    
    
    card.appendChild(cardImg)
    card.appendChild(cardTittle)
    card.appendChild(cardText)
    card.appendChild(cardButton)
    columna.appendChild(card)
    fila.appendChild(columna)


});

