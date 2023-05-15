# Chat App API

## Description

This repository contains the code for a chat app API built with ExpressJS and MongoDB. 

This project was built to learn about building real time communication systems, my goal here was to successfully build an API that can be implemented for an app where two or more people could communicate in real time over a network. The result was a full stack app with Express. 


## Table of Contents

- [Installation](#installation)
- [Diagrams](#diagrams)
- [APIs](#apis)

## Installation
- Clone the repository
- Navigate to the project's folder
- Install dependencies: ```npm install```
-  Run development ```npm run start```
-  Run watch mode ```npm run start:dev```

# Diagrams
## UML Class Diagram

![UMLClass](https://github.com/biccsdev/chatApp/assets/86041666/09969804-3c72-4489-b00f-276b3b13db39)

## UML Components Diagram

![UMLComponents](https://github.com/biccsdev/chatApp/assets/86041666/8fbbb599-bddf-4474-9efb-18f7cf0c4441)

## 

# APIs
## User
### POST /user
Creates a new User.

Request Example:
```
POST /user
```
Body
``` 
{
    "name": "exampleName",
    "password": "examplePass",
    "email": "exampleEmail",
}
```

### GET /user
Returns all Users.

Request Example:
```
GET /user
```
## Chat
### POST /chat
Creates a new chat.

Request Example:
```
POST /chat
```
Body
``` 
{
    "users": [
        {
            "_id": "someUserId"
        }, 
        {
            "_id": "someUserId"
        }
    ],
}
```

### GET /chat/:userId
Returns all Chats from a given userId.

Request Example:
```
GET /chat/someUserId
```

## Message
### POST /message
Creates a new message.

Request Example:
```
POST /message
```
Body
``` 
{
    "chat": "someChatId",
    "user": "someUserId",
    "message": "Hello World",
}
```

### GET /message/:chatId
Returns all messages from a given chatId.

Request Example:
```
GET /message/chatId
```

### PATCH /message/:messageId
Updates a message given a message Id.

Request Example:
```
PATCH /message/someMessageId
```
Body
``` 
{
    "message": "updated message", 
}
```

### DELETE /message/:messageId
Deletes a message given its Id.

Request Example:
```
DELETE /message/messageId
```


