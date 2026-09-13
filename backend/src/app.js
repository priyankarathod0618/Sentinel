const authenticate = require("./middleware/auth.middleware");
const express = require("express");
const cors = require("cors");

const testRouter = require("./routes/test.routes");
const projectRouter = require("./routes/project.routes");
const authRouter = require("./routes/authRoutes");

const requestLogger = require("./middleware/requestLogger.middleware");
const rateLimiter = require("./middleware/rateLimit.middleware");

const app = express();

app.use(rateLimiter);

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);

app.use(express.json());

app.use(requestLogger);

app.use("/api/test", testRouter);
app.use("/api/projects", projectRouter);
app.use("/api/auth", authRouter);

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Sentinel API is running"
    });
});
app.get("/api/auth/me", authenticate, (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});
module.exports = app;