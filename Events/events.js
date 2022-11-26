//UTILIZANDO . . 
const {EventEmitter} = require('events')
const ev = new EventEmitter()

//LIGADO . .
ev.once('saySomething', (message) => {
    console.log('eu ouvi você', message)
})

//DISPARANDO . .
ev.emit('saySomething', 'débora :)')  

ev.emit('saySomething', 'débora :)')  
ev.emit('saySomething', 'débora :)')  
ev.emit('saySomething', 'débora :)')  