console.log('Starting App.js')
const note = require('./notes.js')

const yargs = require('yargs')
const lodash = require('lodash')

var title = {
    description : 'Title note',
    demand : true,
    alias: 't'
}

var body = {
    description : 'Body note',
    demand : true,
    alias: 'b'
}
var argv = yargs.
command('add', 'Adding note', {
    title ,
    body
}).command('list', 'Display full list')
    .command('get', 'Getting note', {
        title ,
        body
    })
    .command('remove', 'Removing note', {
        title
    })
    .help()
    .argv
var command = process.argv[2]
console.log('argv', argv)
console.log('command', argv._[0])

if(command === 'add') {
    var add = note.add(argv.title,argv.body);
    debugger
    if(add)
    {
        console.log(`title--->: ${add.title}`)

    } else {
        console.log(`record already present-->`)
    }
} else if(command === 'remove') {
    var remove = note.remove(argv.title);

}else if(command === 'get') {
    var get = note.get(argv.title);
    debugger
    if(get)
    {
      console.log(`get --> ${get.title} and ${get.body}`)
    } else {
        console.log(`record not found`)
    }
}else if(command === 'list') {
    var list = note.getAll();
    list.forEach((note)=> console.log(`Tittle : ${note.title} and Body: ${note.body} `))
}


