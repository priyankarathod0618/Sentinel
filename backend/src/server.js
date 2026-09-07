const app = require("./app");
const config = require("./config/config");

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Sentinel server running on port ${PORT}`);
});