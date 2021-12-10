let response = {
    error: false,
    message: '',
    body: '',
    method: ''
};

exports.success = function(req, res, msg, status) {
    response = {
        error: false,
        message: msg,
        body: req.body,
        method: req.method
    };
    res.status(status || 200).send(response);
};

exports.error = function(req, res, msg, details, status, e) {
    console.log('[response error] ' + details)
    response = {
        error: true,
        message: msg,
        body: req.body,
        method: req.method
    };
    console.log(e);
    res.status(status || 500).send(response);
};