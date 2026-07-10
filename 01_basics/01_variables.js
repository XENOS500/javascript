//const -> blockscoped , needs initialization after declaration ,
// because they forbid any kind of assignment after declaration

//let -> local variable,block-scoped
// let is preferred over var -> 

// var -> not local variable 


const accountId =144553
let accountEmail ="pareekayush500@gmail.com"
var accountPassword ="12345"
accountCity ="jaipur"

// accountId=2 //not allowed
accountEmail="234@"
accountCity="rampur"

let accountstate ;

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])


