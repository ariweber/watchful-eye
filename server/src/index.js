import express from "express";
import cors from "cors";
import helmet from "helmet";
import alertsRouter from "./routes/alerts.route.js";
import authRouter from "./routes/auth.route.js"
import { errorHandler } from "./midddlweare/errorHandler.js";
import "dotenv/config";
import "./db/mongo.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/alerts", alertsRouter);
app.use("/api/auth", authRouter)

app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server raning on http://localhost:${PORT}`);
});
