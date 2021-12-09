var laptop = {
    price: 28000,
    storage: '1tb',
    color: 'silver',
    processor: 'intel i5',
    ram: '16gb',
    ssdCard: '500gb'
};

// console.log(laptop);

// show a single property value
// console.log(laptop.processor);

// put a property into a new variable
// var laptopColor = laptop.color;
// console.log(laptopColor);


// set an Object property value
// laptop.price = 30000;
// console.log(laptop);


// different way to set a value of an Object property
// laptop['ram'] = '64gb';
// console.log(laptop);



// third way to set a value of an object property
var changeColor = 'color';
laptop[changeColor] = 'Golden';

var changeSsd = 'ssdCard';
laptop[changeSsd] = '512GB';

console.log(laptop);