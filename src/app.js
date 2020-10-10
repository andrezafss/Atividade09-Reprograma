const express = require("express")
const bodyParser = require("body-parser");
const app = express()

//rotas
const index = require("./routes/index")
const colaboradores = require("./routes/colaboradoresRoute")

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/colaboradores", colaboradores)

module.exports = app
