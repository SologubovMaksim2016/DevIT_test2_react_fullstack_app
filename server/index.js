const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const config = require("config")
const bodyParser = require("body-parser")
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const authRouter = require("./routes/auth.routes")
const usersRouter = require("./routes/users.routes")
const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')

const specs = swaggerJsdoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "DevIT test Express API with Swagger",
            version: "0.1.0",
            description:
              "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "DevIT",
                url: "https://devit-team.com/",
                email: "hr@devit-team.com",
            },
        },
        servers: [
            {
                url: "http://localhost:5000/api/",
            },
        ],
    },
    apis: [
        "./routes/auth.routes.js",
        "./routes/users.routes.js"
    ],
});

app.use(cors());
app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/users", usersRouter)
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);


const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })


        app.listen(5000, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
