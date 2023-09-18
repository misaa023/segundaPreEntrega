const bebidas = [
    { nombre: 'cerveza', precio: 800 },
    { nombre: 'cerveza negra', precio: 900 },
    { nombre: 'cerveza roja', precio: 900 },
    { nombre: 'cerveza stella', precio: 1200 },
    { nombre: 'cerveza heineken', precio: 1300 },
];

let carrito = [];

// recooro mi lista con el metodo map, para ir mostrando las distintas variedades de cerveza que el usuario puede comprar.
function mostrarVariedadesCerveza() {
    alert('A continuación se mostrarán las distintas variedades de cerveza');
    let cervezas = bebidas.map(
        (bebida) => `${bebida.nombre} - $${bebida.precio}`,
    );
    alert(cervezas.join('\n'));
}

// agrego los productos creando un nuevo array llamado carrito
function agregarProductoAlCarrito(producto, cantidad) {
    const bebida = bebidas.find((bebida) => bebida.nombre === producto);
    if (bebida) {
        carrito.push({ producto, cantidad, precio: bebida.precio });
        console.log(carrito);
    } else {
        alert('Ese producto no se encuentra en la lista de bebidas.');
    }
}

// funcion principal, es donde realizo la compra de las bebidas, con todas sus condiciones.
function realizarCompra() {
    let seleccion = prompt(
        '¿Hola, desea comprar una cerveza? Responda con si o no',
    );

    while (
        seleccion.toLowerCase() !== 'si' &&
        seleccion.toLowerCase() !== 'no'
    ) {
        alert("Por favor, ingrese 'si' o 'no'");
        seleccion = prompt('¿Hola, desea comprar? Responda con si o no');
    }

    if (seleccion.toLowerCase() === 'si') {
        mostrarVariedadesCerveza();
    }

    while (seleccion.toLowerCase() !== 'no') {
        let producto = prompt('Agrega un producto a tu carrito');
        let cantidad = parseInt(prompt('¿Cuántas unidades quiere llevar?'));

        agregarProductoAlCarrito(producto, cantidad);

        seleccion = prompt('¿Desea seguir comprando? Responda con si o no');
    }

    alert('Gracias por su compra!');

    // muestro por consola como quedaria el carrito final con los productos , cantidad y precio.
    // utilizo el foreach para recorrer la lista carrito.
    carrito.forEach((compraFinal) => {
        alert(
            `Producto: ${compraFinal.producto}, Unidades: ${
                compraFinal.cantidad
            }, Total a pagar: $${compraFinal.cantidad * compraFinal.precio}`,
        );
    });

    // muestro el total que debe pagar el usuario al terminar su compra
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    alert(` El total a pagar es: $${total}`);
}

// Iniciar la compra
realizarCompra();
