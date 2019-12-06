const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const verify = promisify(jwt.verify);

module.exports = async (req, resp, next) => {
    const token = req.headers['x-access-token'];
    if (token) {
        try {
            const decoded = await verify(token, req.app.get('secret'));
            req.user = decoded;
            next();
        } catch (err) {
            console.log(err);
            console.log(`Invalid token: ${token}`);
            return resp.sendStatus(401);
        }
    } else {
        console.log('Token is missing!');
        return resp.sendStatus(401);
    }
}