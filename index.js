// const bcrypt = require ('bcrypt');

// const saltRounds = 10;
// var password = "Fkdj^45ci@Jad";

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(password, salt, function(err, hash) {
//     // returns hash
//     console.log(hash);
//     });
//   });

//   var password2 = "djlfhjd(456";


const Cryptr = require("cryptr");
const bcrypt = require ('bcrypt');


class Bcrypten {
  async hash(data, secret, saltRounds=10) {
    var cryptr = new Cryptr(secret);
    let passwordHash = await bcrypt.hash(data, saltRounds)
    return cryptr.encrypt(passwordHash);

    
  }
  compare(pass1, data, secret) {
    var cryptr = new Cryptr(secret);
    var password = cryptr.decrypt(data);
    return bcrypt.compare(pass1, password)

   
  }
}

module.exports = new Bcrypten();