
const app = require("./app");
const config = require("./config/config");
const connectDB = require("./config/database");

const PORT = config.port;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Sentinel server running on port ${PORT}`);
    });
};

startServer();