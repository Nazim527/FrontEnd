const user = {
    name: 'Nazim',
    status: 'Aproved',
    sayHello: function(color, isMarried) {
        return `Hello ${this.name}, isMarried? ${isMarried},What is it eye color? ${color}`;
    }
}

const difUser2 = {
    name: 'Betul',
    age: 2,
}


// user.sayHello.apply(user2, ['black', false])
// user.sayHello.call(user2, 'black', false)

let total = user.sayHello.bind(difUser2, 'black', false);
console.log(total());