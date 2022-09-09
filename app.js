const express = require('express');
const app = express();
const cors = require('cors')
const db = require("./database.js")


app.use(cors())
app.use(express.static('public'))

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const port = 3000;


//start
app.listen(port, () => 
    console.log('Server running at ${port}'));


app.get('/recipe', (req, res) => {
    let sql = "select * from recipe"
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "recipe":rows
        })
      })
});