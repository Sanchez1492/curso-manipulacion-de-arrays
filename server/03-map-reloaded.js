const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  console.log('Array original', orders);

  const respuesta = orders.map(item => item.total)
  console.log('Nuevo array', respuesta);

//   const tax = orders.map(item => {
//     item.tax = .19
//     return item
//   })

//   console.log('Tax added', tax)
//   console.log('Array Original', orders);

//Lo que sucede en el caso comentado de arriba es que el método .map copia la referencia en memoria de los objetos. Por lo tanto, al crear un nuevo array y modificando el objeto, CAMBIA EL OBJETO ORIGINAL TAMBIÉN.

//Solución al problema detallado en la línea 37:

const tax = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
})

console.log('Tax', tax);
console.log('Array original', orders);

//Split Operation: utilizando los 3 puntos (linea 43) vamos a clonar o copiar los atributos del objeto sin la referencia en memoria. Lo copiamos en un nuevo objeto.