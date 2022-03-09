//creando un arreglo de objetos 
let productos =[
    {
        nombre:"Afiche de recompenza Luffy",
        precio:10000,
        descripcion:"cartel de se busca de monkey D luffy con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_Luffy.png'
        
    },
    {
        nombre:"Afiche de recompenza Zoro",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_zoro.jpg'
    },    
    {
        nombre:"Afiche de recompenza Sanji",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_sanji.jpg'
    },    
    {
        nombre:"Afiche de recompenza Usopp",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_usopp.jpg'
    },    
    {
        nombre:"Afiche de recompenza Chopper",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_chopper.jpg'
    },    
    {
        nombre:"Afiche de recompenza Brook",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_brook.jpg'
    }, 
    {
        nombre:"Afiche de recompenza Nami",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_nami.jpg'
    }, {
        nombre:"Afiche de recompenza Robin",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_robin.jpg'
    }, 
    {
        nombre:"Afiche de recompenza Franky",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
        cantidad: 50,
        foto:'img/carteles/cartel_de_franky.jpg'
    },{
        nombre:"Afiche de recompenza Jimbe",
        precio:10000,
        descripcion:"cartel de se busca de Roronoa Zoro con recompenza ",
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

    //img con la clase card-img-top
    let foto = document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    let cardContent =document.createElement("div")
    cardContent.classList.add("card-body")
    
    //pendiente crear card text y card footer https://getbootstrap.com/docs/5.1/components/card/

    
    let cardTittle=document.createElement("h4")
    cardTittle.classList.add("card-tittle")
    cardTittle.textContent=producto.nombre

//3. padres e hijos o appenddChild's
    card.appendChild(cardTittle)
    card.appendChild(foto)
    card.appendChild(cardContent)
    card.appendChild(cardContent)
    columna.appendChild(card)
    fila.appendChild(columna)


});

