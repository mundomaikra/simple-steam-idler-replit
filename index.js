const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [2305790, 1172470, 10, 2073850];  // Enter here AppIDs of the needed games
var status = 7;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});


// var liargeld = process.env.liargeld;
// var Elmejor10? = process.env.Elmejor10?;
// var 51MA0YSokcCkjIIYXG+KDm5d3Bk= = process.env.51MA0YSokcCkjIIYXG+KDm5d3Bk=;

// var games2 = [2305790, 1172470, 10, 2073850, 218];  // Enter here AppIDs of the needed games
// var status2 = 7;  // 1 - online, 7 - invisible


// user2 = new steamUser();
// user2.logOn({"accountName": username2, "password": password2, "twoFactorCode": steamTotp.generateAuthCode(shared_secret2)});
// user2.on('loggedOn', () => {
// 	if (user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
// 	user2.setPersona(status2);               
// 	user2.gamesPlayed(games2);
// });
