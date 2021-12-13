function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type, authorization");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

module.exports = cors
