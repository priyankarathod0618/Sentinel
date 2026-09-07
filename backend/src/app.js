const express = require("express");
const testRouter = require("./routes/test.routes");
const projectRouter = require("./routes/project.routes");
const requestLogger = require("./middleware/requestLogger.middleware");

const app = express();

app.use(requestLogger);

app.use("/api/test", testRouter);
app.use("/api/projects", projectRouter);

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Sentinel API is running"
    });
});

module.exports = app;