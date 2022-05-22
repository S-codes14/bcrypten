var Bcrypten = require("../index")

const saltRounds = 10;
var password = "Fkdj^45ci@Jad";
var secret = "soShitty"
var hashed = Bcrypten.hash(password, secret, saltRounds)
var compared = Bcrypten.compare(password, hashed, secret)
console.log(hashed)
console.log(compared)

