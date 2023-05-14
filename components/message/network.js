const express = require('express');
const multer = require('multer');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');
const upload = multer({
    dest: 'public/files/',
});

router.get('/', function (req, res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e);
        })
});
//upload.array('files', 5)
router.post('/', upload.single('file'), function (req, res) {

    // console.log(`Old Name: ${req.file.originalname}`);
    // console.log(`New Name: ${req.file.filename}`);
    // console.log(req.file);

    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', "Simulated Error", 400, e);
        });
});

router.patch('/:id', function (req, res) {
    controller.updateMessages(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        });
});

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `User ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        })
});


module.exports = router;