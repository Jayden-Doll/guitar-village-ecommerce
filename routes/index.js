const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const guitarData = require("../public/data/guitar-data.js");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { guitarData });
});

router.get("/brand/:brand", (req, res, next) => {
  const brandName = req.params.brand;
  const safePaths = ["Taylor", "Martin", "Orangewood", "Gibson"];
  if (!safePaths.includes(brandName)) {
    res.render("error");
  } else {
    try {
      res.render("show", { guitarData, brand: brandName });
    } catch (error) {
      res.render("error");
    }
  }
});

router.post("/search", (req, res, next) => {
  const searchTerm = req.body.search;
  const searchTermTrimmed = searchTerm.trim();
  const searchResults = guitarData.filter(({ searchName } = guitar) => {
    if (!searchTermTrimmed) {
      return;
    } else {
      return searchName.toLocaleLowerCase().includes(searchTermTrimmed);
    }
  });
  res.render("search", { results: searchResults, searchTermTrimmed });
});
module.exports = router;
