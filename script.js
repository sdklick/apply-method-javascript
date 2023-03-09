// How to use apply method in javascript

const customer1={
    name:"sumanta das",
    age:100
}

const customer2={
    name:'rahul roy',
    age : 200
   
}

function alldetail(greet,profesion){
    console.log(`${this.name}`,greet,profesion);
}

// only difference apply take argument from an array

alldetail.apply(customer1,['is a good boy','he is a developer'])
alldetail.apply(customer2,['is a bad boy','he is a cyber atacker'])

