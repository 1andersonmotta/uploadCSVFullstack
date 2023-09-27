import express from "express";
import { router } from "./routes";
const cors = require('cors');

const app = express();
app.use(cors());
app.use(router);
app.use(express.json())
const port = process.env.PORT || 3000
console.log(`Server is running - http://localhost:${port}`);

app.listen(port)

