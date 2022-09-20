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


app.get("/api/recipe", (req, res) => {
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

//Används just nu inte till ngt. Men om vi kommer på ngt bra så anpassat vi denna.
app.put("/api/recipe", (req, res, next) => {
  let data = {
    recipeName: req.body.recipeName,
    recipeCategory: req.body.recipeCategory,
    recipeRating: req.body.recipeRating,
    recipeID: req.body.recipeID
  }
  let sql = 'UPDATE recipe SET recipeName = ?, recipeCategory = ?, recipeRating = ? WHERE recipeID = ?';
  let params =[data.recipeName, data.recipeCategory, data.recipeRating];
  db.run(sql, params, function(err, result){
    if(err){
      res.status(400).json({"error": err.message})
      return;
    }
    res.json({
      "message":"Success",
      "recipe" : data,
      "id"  : this.lastID
    })
  })
});


app.get("/api/recipe/:id", (req, res, next) => {
  let sql = "select * from recipe where recipeID = ?"
  let params = [req.params.id]
  db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "recipe":row
      })
    })
  
})