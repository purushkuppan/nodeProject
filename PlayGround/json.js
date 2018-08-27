/*
var obj = {
    name : "Purush", age : 29
}

var convert = JSON.stringify(obj);

console.log(typeof convert)
console.log( convert)

var ori = JSON.parse(convert)

console.log( ori)*/

const fs= require('fs')

var userObj = { user: "Purush", email: 'purush.kuppan@gmail.com', cid: 'c831604'}

var jsonUserObj = JSON.stringify(userObj)

fs.writeFileSync('note.json', jsonUserObj );
var objfromFile = fs.readFileSync('note.json');

var parsedJson = JSON.parse(objfromFile)

console.log('user', parsedJson.user)




