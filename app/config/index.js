require('dotenv').config();

const config = {
    app: {
        port: 3000 || process.env.port
    },
    db: {
        uri: "mongodb://127.0.0.1:27017/blog"|| process.env.MONGODB_URI 
    }
}

module.exports = config;