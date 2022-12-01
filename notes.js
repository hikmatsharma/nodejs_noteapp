const yargs = require('yargs')
const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'Your notes...'
}
const addNotes = (title, body) => {
const notes = loadNotes()
const duplicateNotes = notes.filter((note) => note.title === title)
if(duplicateNotes.length === 0){
    notes.push({
        title: title,
        body: body
    })
    saveNote(notes)
    console.log(clalk.green.inverse("New note added !!"))
}else{
    console.log(chalk.red.inverse("note title taken"))
}
}

//remove notes 
const removeNote = (note) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesToKeep.length){
        saveNote(notesToKeep)
        console.log(chalk.green.inverse("notes removed"))
    }else{
        console.log(chalk.red.inverse("no note found !!"))
    }

}
const loadNotes = () => {
    try{
const dataBuffer = fs.readFileSync('notes.json')
const dataJSON = dataBuffer.toString()
return JSON.parse(dataJSON)
    }catch(e){
        return[]
    }
}

const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}
module.exports = {
    getNotes: getNotes,
    addNote: addNotes,
    removeNote: removeNote

}

// const http = require('http');
// const fs = require('fs');
// const requests = require('requests');
// const homeFile = fs.readFileSync("index.html" , "utf-8");
// const server = http.createServer(req, res) => {
//     if(req.url = "/"){
//         requests('https://api.openweathermap.org/data/2.5/weather?q=Surkhet&appid=b1b1a2d41c4647b8fcb40573a5b9e422', { streaming })
// .on('data', function (chunk) {
//   console.log(chunk)
// })
// .on('end', function (err) {
//   if (err) return console.log('connection closed due to errors', err);
 
//   console.log('end');
// });
//     }
// }
// server.listen(8000, "127.0.0.1");


