const words = ['spray', 'limit', 'elite', 'exuberant'];

//Solución con for

const newArray = []

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item)
    }
}

console.log('New array', newArray);
console.log('Original array', words);

//Solución con filter

const newArray2 = words.filter(item => item.length >= 6)

console.log('New array with filter', newArray2);
console.log('Original array', words);

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

const deliverdOrders = orders.filter(item => item.delivered) //Al ser un booleano, por defecto es true, por lo que no hace falta poner == true

// console.log(deliverdOrders);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search("Nico"));