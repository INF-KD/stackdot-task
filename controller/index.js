const { getHelloS } = require("../service")

module.exports = {
    getHello: (req, res) => {
        return res.end(getHelloS(req.query?.msg))
    }
}