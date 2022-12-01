// const name = function (){
//     return " My Notes"
// }
// module.exports = name
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
// console.log(validator.red.bgGreen.bold('hgfhfgfg@gmail.com'))

// console.log(process.argv[1])
// const command = process.argv[2]
// if (command ==='add'){
//     console.log('adding notes ')
// }else if(command==='remove'){
//     console.log('removing notes')
// }

// customize yargs version 
yargs.version('1.1.0')

// create yargs cmd
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
        console.log('Note Addez ' + argv.title + argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note ttle',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})
// console.log(process.argv)
// console.log(yargs.argv)
 yargs.parse()

