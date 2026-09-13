const dns = require("dns");

dns.setServers(["8.8.8.8"]);

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            family: 4,
            serverSelectionTimeoutMS: 10000
        });

        console.log("MongoDB Connected successfully");
    } catch (error) {
    console.log("MongoDB connection failed");

    for (const [server, description] of error.reason.servers) {
        console.log("\nSERVER:", server);
        console.log("ERROR:", description.error);
    }

    process.exit(1);
}
};

module.exports = connectDB;