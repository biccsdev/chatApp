const store = require('./store');

function createChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }
    const chat = {
        users: users,
    };
    return store.create(chat);
}

function listChats(userId) {
    return store.list(userId);
}

module.exports = {
    createChat,
    listChats,
}