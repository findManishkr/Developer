const bcrypt = require('bcrypt');    // imported `bcrypt` package

async function main(){

const plainPassword = "manishk123";

// generate `salt`( it is nothing but addition of some random data to `plainPassword`)

const salt = await bcrypt.genSalt(12);  // bcrypt.genSalt() -> generates salted string

console.log(salt);



   // hashedPassword = plainPassword + salt

const hasedPassword  = await bcrypt.hash(plainPassword,salt);      // bcrypt.hash(plainPassword,salt)->  = hased password

console.log(hasedPassword);




const IsSame =  await bcrypt.compare(plainPassword, hasedPassword);         // bcrypt.compare(plainPassword, hasedPassword) -> returns true || or false

if(IsSame){
    console.log('same password...')
}else{
     console.log('password differs...');
}

const round = await bcrypt.getRounds(hasedPassword);   // bcrypt.compare(plainPassword, hasedPassword)-> return no of rounds

console.log(round);



};

main();






/*
   
   `demonstratioin` of password hashing








*/