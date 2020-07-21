const router = require("express").Router();
const path = require('path');
const Book = require("../models/book");

router.get("/api/books", function (req, res) {
  Book.find({})
    .then((books) => res.json(books))
    .catch((err) => res.status(422).json(err));
});

router.post("/api/books", function (req, res) {
    console.log(req.body);
  Book.create(req.body)
    .then((books) => res.json(books))
    .catch((err) => res.status(422).json(err));
});

router.delete("/api/books/:id", function (req, res) {
  Book.findById({_id: req.params.id})
    .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    
});

router.get("*", function (req,res) {
    res.sendFile(path.join(__dirname, "/../my-app/build/index.html"))
});

module.exports = router;
