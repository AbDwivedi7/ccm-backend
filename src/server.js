import express, { json } from 'express';
import bodyParser from "body-parser";
import cors from 'cors'
import * as dotenv from 'dotenv' 
import routes from './routes'
import mongodb_config from './database/mongodb.database'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './../swagger_output.json'


dotenv.config()

const app = express();

app.use(json())
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  preflightContinue: true,
  optionsSuccessStatus: 204
}
app.use(cors(corsOptions));


mongodb_config.connectMongoDb()

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', async (req, res) => {
    res.json({ status: true, message: "I am Up" })
});

app.use('/api', routes)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`App listening at port ${PORT}`))

module.exports = {
  app
}