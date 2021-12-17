const Model = require('./model');

function createChat(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}

async function listChats(userId) {
    return new Promise((resolve, reject) => {
        //Preparing filter for user filtering, to return only user 
        //related chats
        let filter = {};
        if (userId) {
            filter = {
                users: userId,
            }
        }

        Model.find(filter)
            .populate('users')
            .exec((err, populated) => {
                if (err) {
                    reject(err);
                    return false;
                }
                resolve(populated);
            });
    });
}

module.exports = {
    create: createChat,
    list: listChats,
}