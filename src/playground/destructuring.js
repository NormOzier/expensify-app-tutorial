//object destructuring

////rips off the object to fundamental bits
//const person = {
//    name: 'Norman',
//    age: 18,
//    location: {
//        city: 'Kota Kinabalu',
//        temp: 30
//    }
//};
//
//const {name: firstName = 'Anon', age} = person;
//
//console.log(`${firstName} is ${age}.`);
//
//const{city, temp: temperature} = person.location;
//if (city && temperature) {
//    console.log(`It's ${temperature} in ${city}.`);
//}

//const book ={
//    title: 'Bakemonogatari',
//    author: 'Nisio Isin',
//    publisher: {
//        name: 'Vertical'
//    }
//};
//
//const {name: publisherName = 'Self-published'} = book.publisher;
//console.log(publisherName);

//Array Destructuring

//const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//const [, city, yourState = 'New York'] = address;
//console.log(`You are in ${city} ${yourState}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [drink,,med] = item;

console.log(`A medium ${drink} costs ${med}`);