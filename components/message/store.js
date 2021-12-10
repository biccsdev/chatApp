const db = require('mongoose');
const uri = 'mongodb+srv://db_user_biccs:kondas123@cluster0.ihoyt.mongodb.net/chatapp?retryWrites=true&w=majority';
const Model = require('./model');

db.Promise = global.Promise;
db.connect(uri, {
    useNewUrlParser: true,
});
console.log('[db] Connected succesfully')

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser };
    }
    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    //get
    //update
    //delete
}