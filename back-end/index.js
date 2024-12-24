import express from "express";
import cors from 'cors'
import dotenv from "dotenv";

import { serverInit } from './src/services/serverInit.js';
import routes from './src/routes/index.js'
// import mercadopagoRouter from './routes/mercadopago.routes.js'
import MPRouter from "./src/routes/MPRoutes.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("public/uploads"));

app.use('/api', routes);

//mercadopago
app.use('/api',MPRouter);


serverInit(app, PORT)