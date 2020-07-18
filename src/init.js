import "@babel/polyfill";
import dotenv from "dotenv";
import app from "./app";
import "./db";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT_SER || 8080;

const handleListening = () => console.log(`♬ Listening on: studiosundial.com`);

app.listen(PORT, handleListening);
