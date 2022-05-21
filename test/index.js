var Bcrypten = require("../index")

const saltRounds = 10;
var password = "Fkdj^45ci@Jad";
var secret = "soShitty"
var hashed = Bcrypten.hash(password, secret, saltRounds)
var compared = Bcrypten.compare(password, "2d2e33c61af67cdf6f3af208984a8860d352a43d9d88f6d476476ec79376c85ee6c924cfa11b1eaa4b0fb423a39ccd4e301b361249b3060ec859af3b42572dc4729bd383bceba7c8ce5d13ba655404e4ae3d99bb41a064293354cfa5c04e8811064fa46cf7986812f32a5c6f4d251f494c59aba9951e54f87c65d766163e3db8c637a1e5a5e296575ea1d012a18ff3d71631a88bc1966d11ebf1f880", secret)
console.log(hashed)
console.log(compared)

