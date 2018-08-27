console.log('Starting nots.js')
const fs= require('fs')
var readFromFile = () => {
    try {
        var fileJson = fs.readFileSync('node-json.json')
        return JSON.parse(fileJson)
    } catch (e) {
        return []
    }
}

var writeToFile = (note) => {
    fs.writeFileSync('node-json.json', JSON.stringify(note))
}

var add = (title,body) => {
    var note = readFromFile();
    var notes = {
        title, body
    }

    var filteredout = note.filter((notes) => notes.title === title)

    if (filteredout.length === 0) {
    note.push(notes)
    writeToFile(note)
    return notes
    }

}


var remove = (title) => {
   var notes = readFromFile()
   var removeNotes = notes.filter((chk) => chk.title != title )
    writeToFile(removeNotes)


}
var get = (title) => {
    var notes = readFromFile()
    var removeNotes = notes.filter((chk) => chk.title === title )
   return removeNotes[0]
}

var getAll = () => {
    return readFromFile();
}

module.exports = {add : add,remove: remove,get: get,getAll }