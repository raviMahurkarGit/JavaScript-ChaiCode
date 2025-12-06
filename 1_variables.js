console.log(3+3)
// alert(3+3)  support on 

let b = 10
var c = 1
const d = 54
const e =54
let age = 100
let isLoggedIn = true


const accountId = 13343
let accountEmail = "ravimahurkar@gmail.com"
var accountPassword = "12345"
accountCity = "Nanded"      // possible 
let accountState    // undefined

// accountId = 2 //not allowed
accountEmail = "hew@gsd.com"
accountPassword = "212121"
accountCity = "Banglore"

console.log(accountId)
/*
    prefer not tu use var  <--- 
    because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail,accountPassword,accountCity, accountState])